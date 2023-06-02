from django.db.models import Q
from django.core.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from app.user.managers import AppUserType
from app.user.models import AppUser, Student, Professional
from .models import ChatRequest, Chat, ChatMessage
from .serializers import *


class ChatRequestView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        incoming = ChatRequest.objects.filter(
            to_user=request.user,
            status=ChatRequest.Status.PENDING.value,
        )
        outgoing = ChatRequest.objects.filter(
            from_user=request.user,
            status=ChatRequest.Status.PENDING.value,
        )

        incoming_serializer = ChatRequestListIncomingSerializer(
            incoming,
            many=True,
        )
        outgoing_serializer = ChatRequestListOutgoingSerializer(
            outgoing,
            many=True,
        )

        return Response(
            status=status.HTTP_200_OK,
            data={
                'incoming': incoming_serializer.data,
                'outgoing': outgoing_serializer.data,
            },
        )

    def post(self, request, *args, **kwargs):

        ALLOWED_USERS = [
            AppUserType.STUDENT.value,
            AppUserType.PROFESSIONAL.value,
        ]

        serializer = ChatRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        from_user = request.user
        to_user = AppUser.objects.filter(id=serializer.data['to_user']).first()

        if not to_user:
            return self.response(
                status.HTTP_404_NOT_FOUND,
                "The destination user doesn't exists."
            )

        if (from_user.user_type not in ALLOWED_USERS) or (to_user.user_type not in ALLOWED_USERS):
            return self.response(
                status.HTTP_400_BAD_REQUEST,
                'You and destinaton user should be a student or professional.'
            )

        if from_user.user_type == to_user.user_type:
            return self.response(
                status.HTTP_400_BAD_REQUEST,
                'Cannot request a chat to the same user type.'
            )

        if ChatRequest.objects.filter(
            from_user=from_user,
            to_user=to_user,
            status=ChatRequest.Status.PENDING.value,
        ).exists():
            return self.response(
                status.HTTP_400_BAD_REQUEST,
                "There's already a pending chat request."
            )

        if Chat.objects.filter(
            chat_request__from_user=from_user,
            chat_request__to_user=to_user,
            status=Chat.Status.OPEN.value,
        ).exists():
            return self.response(
                status.HTTP_400_BAD_REQUEST,
                "There's already a open chat between your and destination user."
            )

        chat_request = ChatRequest.objects.create(
            from_user=from_user,
            to_user=to_user,
            status=ChatRequest.Status.PENDING.value,
        )

        return Response(
            status=status.HTTP_200_OK,
            data={'id': chat_request.id, 'status': chat_request.status}
        )

    def response(self, code, message):
        return Response(status=code, data={'message': message})


class ChatRequestByIdView(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, chat_request_id, *args, **kwargs):
        chat_request = ChatRequest.objects.filter(pk=chat_request_id).first()

        if not chat_request:
            return Response(
                status=status.HTTP_404_NOT_FOUND,
                data={'message': 'This chat request id is invalid.'}
            )

        if chat_request.to_user != request.user:
            return Response(
                status=status.HTTP_401_UNAUTHORIZED,
                data={'message': "You're trying to accept a chat request to another user."}
            )

        if chat_request.status != ChatRequest.Status.PENDING.value:
            return Response(
                status=status.HTTP_401_UNAUTHORIZED,
                data={'message': 'You already responded to this chat request.'}
            )

        serializer = ChatRequestAcceptSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        accept = serializer.data['accept']

        if accept:
            chat_request.status = ChatRequest.Status.ACCEPTED.value
            chat = Chat.objects.create(chat_request=chat_request)
            chat_request.save()

            return Response(
                status=status.HTTP_200_OK,
                data={'accepted': True, 'chat_id': chat.pk},
            )
        else:
            chat_request.status = ChatRequest.Status.DECLINED.value
            chat_request.save()

            return Response(
                status=status.HTTP_200_OK,
                data={'accepted': False},
            )


class ChatListView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        chats = Chat.objects.filter(
            Q(chat_request__from_user=user) |
            Q(chat_request__to_user=user)
        )
        result = []

        for chat in chats:
            last_message = ChatMessage.objects.filter(chat=chat).last()

            from_user = chat.chat_request.from_user
            to_user = chat.chat_request.to_user

            from_user_model = None
            to_user_model = None

            if from_user.user_type == 'S':
                from_user_model = Student.objects.get(user=from_user)
                to_user_model = Professional.objects.get(user=to_user)
            else:
                from_user_model = Student.objects.get(user=to_user)
                to_user_model = Professional.objects.get(user=from_user)

            result.append({
                'id': chat.id,
                'status': chat.status,
                'last_message': None if not last_message else last_message.text,
                'from_user': {
                    'id': from_user.id,
                    'first_name': from_user_model.first_name,
                    'last_name': from_user_model.last_name,
                    'type': from_user.user_type,
                },
                'to_user': {
                    'id': to_user.id,
                    'first_name': to_user_model.first_name,
                    'last_name': to_user_model.last_name,
                    'type': to_user.user_type,
                },
            })

        return Response(
            status=status.HTTP_200_OK,
            data=result,
        )


class ChatMessageView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChatMessageSerializer
    pagination_class = PageNumberPagination

    def get_queryset(self):
        user = self.request.user
        chat_id = self.kwargs['chat_id']

        chat = get_object_or_404(Chat, pk=chat_id)
        chat_request = chat.chat_request

        if user != chat_request.from_user and user != chat_request.to_user:
            raise PermissionDenied("You're not in this chat.")

        return ChatMessage.objects.filter(chat=chat).order_by('-sent_at')
