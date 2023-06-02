from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class GetCourseByIdView(APIView):
    def get(self,request,course_id):
        queryset = Course.objects.filter(id=course_id).first()
        serializer = CourseSerializer(queryset)
        return Response(data=serializer.data, status=status.HTTP_200_OK)      