from datetime import datetime, timedelta
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from app.user.models import Student, Professional, AppUser
from .models import DiaryReport, DiaryAccess
from .serializers import DiaryReportSerializer, DiaryAccessSerializer
from django.db.models import Count

def check_empty_and_return_status_code(queryset):

    if not queryset.exists():
        return Response(status=status.HTTP_204_NO_CONTENT)

    serializer = DiaryReportSerializer(queryset, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


class DiaryReportCreateAndListView(APIView):

    def get(self, request, format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        queryset = DiaryReport.objects.filter(student_id=student_id)
        return check_empty_and_return_status_code(queryset)

    def post(self, request, format=None, *args, **kwargs):
        diaryreport = DiaryReport(
            student_id=Student.objects.get(user_id=request.user.id).id,
            content=request.data['content'],
            emotion=None
        )
        diaryreport.save()
        serializer = DiaryReportSerializer(diaryreport)

        return Response(
            data=serializer.data,
            status=status.HTTP_201_CREATED,
        )


class DiaryReportFindByIdView(APIView):

    def get(self, request, pk, format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        queryset = DiaryReport.objects.filter(student_id=student_id).filter(id=pk)

        return check_empty_and_return_status_code(queryset=queryset)


class DiaryReportFindByDateView(APIView):

    def get(self, request, date, format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        queryset = DiaryReport.objects.filter(student_id=student_id).filter(created_at=date)

        return check_empty_and_return_status_code(queryset=queryset)

class DiaryReportRetrieveHistoricGraphicAllView(APIView):

    def get(self,request,format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        queryset = DiaryReport.objects.filter(student_id=student_id).exclude(emotion__isnull=True).values('emotion').annotate(qnt=Count('emotion'))
        dict_emotions = {"joy":0,"anger":0,"neutral":0,"sadness":0}
        dict_emotions.update(dict(queryset.values_list('emotion', 'qnt')) )

        return Response(data=dict_emotions,status=status.HTTP_200_OK)


class DiaryReportRetrieveHistoricGraphicLastWeekView(APIView):

    def get(self,request,format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        last_week = datetime.now() - timedelta(days=7)
        queryset = DiaryReport.objects.filter(student_id=student_id,created_at__gte=last_week).exclude(emotion__isnull=True).values('emotion').annotate(qnt=Count('emotion'))
        dict_emotions = {"joy":0,"anger":0,"neutral":0,"sadness":0}
        dict_emotions.update(dict(queryset.values_list('emotion', 'qnt')) )
        

        return Response(data=dict_emotions,status=status.HTTP_200_OK)
    
class DiaryReportRetrieveHistoricGraphicStudentWeekView(APIView):
     def get(self,request,myId):
        user_id = AppUser.objects.get(id=myId).id
        student_id = Student.objects.get(user_id=user_id).id
        last_week = datetime.now() - timedelta(days=7)
        queryset = DiaryReport.objects.filter(student_id=student_id,created_at__gte=last_week).exclude(emotion__isnull=True).values('emotion').annotate(qnt=Count('emotion'))
        dict_emotions = {"joy":0,"anger":0,"neutral":0,"sadness":0}
        dict_emotions.update(dict(queryset.values_list('emotion', 'qnt')) )
        

        return Response(data=dict_emotions,status=status.HTTP_200_OK)

class DiaryReportRetrieveHistoricGraphicTodayView(APIView):

    def get(self,request,format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        queryset = DiaryReport.objects.filter(student_id=student_id,created_at__gte=datetime.now()).exclude(emotion__isnull=True).values('emotion').annotate(qnt=Count('emotion'))
        dict_emotions = {"joy":0,"anger":0,"neutral":0,"sadness":0}
        dict_emotions.update(dict(queryset.values_list('emotion', 'qnt')) )
        max_emotion = max(dict_emotions, key=dict_emotions.get)

        # sim ta ruim mas to nem ai
        if max_emotion == "anger":
            value = "meh"
            max_emotion = "Raiva  "
        elif max_emotion == "neutral":
            value = "meh"
            max_emotion = "Neutro  "
        elif max_emotion == "joy":
            value = "smile"
            max_emotion = "Felicidade  "
        elif max_emotion=="sadness":
            value = "frown"
            max_emotion = "Tristeza  "
        


        response_dict = {"emotion":max_emotion,"value":value}

        return Response(data=response_dict,status=status.HTTP_200_OK)


class DiaryReportProfessionalRetrieveHistoricGraphicAllView(APIView):

    def get(self,request):
        professional_id = Professional.objects.get(user_id=request.user.id).id
        student_list = DiaryAccess.objects.filter(professional_id=professional_id).values('student_id')
        queryset = DiaryReport.objects.filter(student_id__in=student_list).exclude(emotion__isnull=True).values('emotion').annotate(qnt=Count('emotion'))

        dict_emotions = {"joy":0,"anger":0,"neutral":0,"sadness":0}
        dict_emotions.update(dict(queryset.values_list('emotion', 'qnt')) )
        
        return Response(data=dict_emotions,status=status.HTTP_200_OK)
    
class DiaryReportProfessionalRetrieveHistoricGraphicLastWeekView(APIView):

    def get(self,request):
        professional_id = Professional.objects.get(user_id=request.user.id).id
        student_list = DiaryAccess.objects.filter(professional_id=professional_id).values('student_id')
        last_week = datetime.now() - timedelta(days=7)
        queryset = DiaryReport.objects.filter(student_id__in=student_list,created_at__gte=last_week).exclude(emotion__isnull=True).values('emotion').annotate(qnt=Count('emotion'))

        dict_emotions = {"joy":0,"anger":0,"neutral":0,"sadness":0}
        dict_emotions.update(dict(queryset.values_list('emotion', 'qnt')) )
        
        return Response(data=dict_emotions,status=status.HTTP_200_OK)


class DiaryAccessCreateDeleteView(APIView):

    def get(self, request):
        professional = Professional.objects.get(user_id=request.GET.get('professional'))
        student = Student.objects.get(user_id=request.user)
        queryset = DiaryAccess.objects.filter(student=student, professional=professional)

        return Response(
            data={'value': queryset.exists()},
            status=status.HTTP_200_OK,
        )

    def post(self, request, format=None, *args, **kwargs):
        student=Student.objects.get(user_id=request.user.id)
        professional=Professional.objects.get(user_id=request.data['professional'])

        access = DiaryAccess(student=student,professional=professional)
        access.save()

        return Response(
            status=status.HTTP_201_CREATED
        )

    def delete(self, request, format=None):
        student_id = Student.objects.get(user_id=request.user.id).id
        access = DiaryAccess.objects.get(student=student_id)
        access.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class DiaryAccessListProfessionalView(APIView):

    def get(self, request, format=None):
        professional_id = Professional.objects.get(user_id=request.user.id).id
        queryset = DiaryAccess.objects.filter(professional=professional_id)
        serializer = DiaryAccessSerializer(queryset, many=True)

        return check_empty_and_return_status_code(serializerData=serializer.data)
