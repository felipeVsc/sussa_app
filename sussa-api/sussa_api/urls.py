"""sussa_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from app.course.views import CourseViewSet, GetCourseByIdView
from app.diary.views import *
from app.notifications.views import *
from app.service.views import ServiceViewSet, GetServiceByIdView
from app.user.views import *
from app.chat.views import *

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/app/auth/', AppAuthToken.as_view()),
    path('api/web/auth/', WebAuthToken.as_view()),
    path('api/student/', StudentView.as_view()),
    path('api/student/update/', StudentUpdateView.as_view()),
    path('api/professional/', ProfessionalView.as_view()),
    path('api/professional/<int:professional_id>/', GetProfessionalByIdView.as_view()),
    path('api/professional/update/', ProfessionalUpdateView.as_view()),
    path('api/professional/patients/',GetPatientsFromProfessionalView.as_view()),

    path('api/user/img/', ChangeGetDeleteProfilePictureView.as_view()),

    path('api/course/', CourseViewSet.as_view({'get': 'list'})),
    path('api/course/<int:course_id>/', GetCourseByIdView.as_view()),

    path('api/service/', ServiceViewSet.as_view({'get': 'list'})),
    path('api/service/<int:service_id>/', GetServiceByIdView.as_view()),

    path('api/diary/report/', DiaryReportCreateAndListView.as_view()),
    path('api/diary/report/id/<int:pk>/', DiaryReportFindByIdView.as_view()),
    path('api/diary/report/date/<str:date>/', DiaryReportFindByDateView.as_view()),
    path('api/diary/access/', DiaryAccessCreateDeleteView.as_view()),
    path('api/diary/access/professional/', DiaryAccessListProfessionalView.as_view()),
    path('api/diary/report/historic/', DiaryReportRetrieveHistoricGraphicAllView.as_view()),
    path('api/diary/report/historic/student/<int:myId>/', DiaryReportRetrieveHistoricGraphicStudentWeekView.as_view()),
    path('api/diary/report/historic/week/', DiaryReportRetrieveHistoricGraphicLastWeekView.as_view()),
    path('api/diary/report/historic/today/', DiaryReportRetrieveHistoricGraphicTodayView.as_view()),
    path('api/diary/report/historic/professional/', DiaryReportProfessionalRetrieveHistoricGraphicAllView.as_view()),
    path('api/diary/report/historic/week/professional/', DiaryReportProfessionalRetrieveHistoricGraphicLastWeekView.as_view()),
    

    

    path('api/chat-request/', ChatRequestView.as_view()),
    path('api/chat-request/<int:chat_request_id>/', ChatRequestByIdView.as_view()),
    path('api/chat/', ChatListView.as_view()),
    path('api/chat/<int:chat_id>/', ChatMessageView.as_view()),

    path('api/notifications/', CreateAndListNotifications.as_view()),
    path('api/notifications/user/', ListNotificationsByUser.as_view()),
    path('api/notifications/user/find/', FindNotificationById.as_view()),
    path('api/notifications/all/', ListAllNotifications.as_view()),
    path('api/devices/',CreateAndListFCMDevice.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
