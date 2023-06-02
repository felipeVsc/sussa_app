from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Student, Professional, AppUser, AppUser
from app.diary.models import DiaryAccess
from app.diary.serializers import DiaryAccessSerializer
from .serializers import *

from django.core.files.uploadedfile import InMemoryUploadedFile


class AppAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request},
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, _ = Token.objects.get_or_create(user=user)

        queryset = Student.objects.filter(user_id=user.id)

        if not queryset.exists():
            return Response(status=status.HTTP_404_NOT_FOUND)

        student = queryset.values()[0]
        student['id'] = user.id
        student['email'] = user.email
        student['photo'] = user.photo.url
        del student['user_id']

        return Response({
            'token': token.key,
            'student': student
        })


class WebAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request},
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, _ = Token.objects.get_or_create(user=user)

        queryset = Professional.objects.filter(user_id=user.id)

        if not queryset.exists():
            return Response(status=status.HTTP_404_NOT_FOUND)

        professional = queryset.values()[0]
        professional['id'] = user.id
        professional['email'] = user.email
        del professional['user_id']

        return Response({
            'token': token.key,
            'professional': professional
        })


class StudentView(APIView):

    def get(self,request):
        student_id = request.data['id']
        queryset = Student.objects.filter(id=student_id).first()
        serializer = StudentModelSerializer(queryset)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        student = Student(
            first_name=serializer.data['first_name'],
            last_name=serializer.data['last_name'],
            course_id=serializer.data['course'],
        )
        student.save(
            email=serializer.data['email'],
            password=serializer.data['password'],
        )

        return Response(
            status=status.HTTP_201_CREATED,
            data={
                'id': student.user.id,
                'email': student.user.email,
                'user_type': student.user.user_type,
            }
        )


class StudentUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        serializer = StudentUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        student = Student.objects.get(user=request.user)

        student.first_name = serializer.data['first_name']
        student.last_name = serializer.data['last_name']
        student.course_id = serializer.data['course_id']
        student.save()

        del student['user_id']

        return Response(
            status=status.HTTP_200_OK,
            data={'student': student}
        )


class ProfessionalView(APIView):
    def get(self, request, *args, **kwargs):
        queryset = Professional.objects.all()
        serializer = ProfessionalModelSerializer(queryset, many=True)
        if not queryset.exists():
            return Response(data=[], status=status.HTTP_204_NO_CONTENT)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = ProfessionalSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        professional = Professional(
            first_name=serializer.data['first_name'],
            last_name=serializer.data['last_name'],
            crp=serializer.data['crp'],
            description=request.data['description'],
            role=request.data['role']
        )
        professional.save(
            email=serializer.data['email'],
            password=serializer.data['password'],
        )

        return Response(
            status=status.HTTP_201_CREATED,
            data={
                'id': professional.user.id,
                'email': professional.user.email,
                'user_type': professional.user.user_type,
            }
        )


class GetProfessionalByIdView(APIView):

    def get(self,request,professional_id):
        queryset = Professional.objects.filter(id=professional_id).first()
        serializer = ProfessionalModelSerializer(queryset)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

class ProfessionalUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        serializer = ProfessionalUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        professional = Professional.objects.get(user=request.user)

        professional.first_name = serializer.data['first_name']
        professional.last_name = serializer.data['last_name']
        professional.save()

        del professional['user_id']

        return Response(
            status=status.HTTP_200_OK,
            data={'professional': professional},
        )

class GetPatientsFromProfessionalView(APIView):

    def get(self,request):
        prof = Professional.objects.get(user_id=request.user.id).id
        queryset = Student.objects.filter(diaryaccess__professional_id=prof)
        serializer = StudentModelSerializer(queryset,many=True)
        
        return Response(data=serializer.data, status=status.HTTP_200_OK)

class ChangeGetDeleteProfilePictureView(APIView):
    def get(self, request, format=None):
        user_queryset = request.user

        try:
            img_url = user_queryset.photo.url
        except ValueError:
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(data={'url': img_url}, status=status.HTTP_200_OK)

    def put(self, request, format=None):
        
        img = request.data['photo']
        img: InMemoryUploadedFile = request.FILES.get('photo')
        
        user_queryset = request.user
        user_queryset.photo.delete(False)

        user_queryset.photo = img
        print(user_queryset.photo.url)
        user_queryset.photo.save(img.name, img)
        print(user_queryset)
        super(AppUser, request.user).save()
        return Response(status=status.HTTP_200_OK)

    def delete(self, request, format=None):
        user_queryset = request.user
        user_queryset.photo.delete(True)

        return Response(status=status.HTTP_200_OK)
