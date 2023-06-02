from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from app.notifications.models import Notification
from app.user.models import AppUser
from fcm_django.models import FCMDevice

from .serializers import NotificationSerializer, FCMDeviceSerializer


def check_empty_and_return_status_code(serializer_data):
    if serializer_data == []:
        return Response(data=serializer_data, status=status.HTTP_204_NO_CONTENT)

    return Response(data=serializer_data, status=status.HTTP_200_OK)


class ListAllNotifications(APIView):
    def get(self, request, format=None):
        queryset = Notification.objects.all()
        serializer = NotificationSerializer(queryset, many=True)

        return check_empty_and_return_status_code(
            serializer_data=serializer.data)


class ListNotificationsByUser(APIView):
    def get(self, request, format=None):
        user = request.user.id

        queryset = Notification.objects.filter(published=True).filter(destination_user=user).order_by("-created_at")
        serializer = NotificationSerializer(queryset, many=True)

        return check_empty_and_return_status_code(serializer_data=serializer.data)


class FindNotificationById(APIView):
    def get(self, request, format=None):
        user = request.user.id
        notification_id = request.data['id']

        queryset = Notification.objects.filter(published=True).filter(destination_user=user).filter(id=notification_id)
        serializer = NotificationSerializer(queryset, many=True)

        return check_empty_and_return_status_code(serializer_data=serializer.data)


class CreateAndListNotifications(APIView):

    def get(self, request, format=None):
        queryset = Notification.objects.filter(published=True)
        serializer = NotificationSerializer(queryset, many=True)

        return check_empty_and_return_status_code(serializer_data=serializer.data)

    def post(self, request, format=None):

        notification = Notification(
            title=request.data['title'],
            content=request.data['content'],
            notification_type=request.data['notification_type'],
            destination_type=request.data['destination_type'],
            destination_user=request.data['destination_user'],
        )
        notification.save()

        return Response(status=status.HTTP_201_CREATED)


class CreateAndListFCMDevice(APIView):

    def get(self, request, format=None):
        queryset = FCMDevice.objects.all()
        serializer = FCMDeviceSerializer(queryset, many=True)

        if not queryset.exists():
            return Response(data=[], status=status.HTTP_204_NO_CONTENT)

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )

    def post(self, request, format=None):
        user_id = request.user.id
        user_type = request.user.user_type
        
        new_device = FCMDevice(
            registration_id=request.data['registration_id'],
            user_id=user_id,
            type=request.data['device_type']
        )
        new_device.save()

        if user_type == 'S':
            FCMDevice.objects.filter(id=new_device.id).handle_topic_subscription(True, topic='Student')

        elif user_type == 'P':
            FCMDevice.objects.filter(id=new_device.id).handle_topic_subscription(True, topic='Professional')

        return Response(status=status.HTTP_201_CREATED)
