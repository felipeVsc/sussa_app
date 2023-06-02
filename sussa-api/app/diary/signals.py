from django.db.models.signals import post_save
from django.dispatch import receiver

from app.notifications.models import Notification as NotificationModel
from app.user.models import AppUser

from .models import DiaryReport, DiaryAccess
from .tasks import infer_report_emotion

from firebase_admin.messaging import Message, Notification
from fcm_django.models import FCMDevice


@receiver(post_save, sender=DiaryReport)
def set_report_emotion_async(sender, instance, created, **kwargs):
    if created:
        pk = instance.pk
        infer_report_emotion.s(pk).apply_async()


@receiver(post_save, sender=DiaryAccess)
def send_notifications_diary_access(sender, instance, created, **kwargs):

    if created:
        student = AppUser.objects.filter(id=instance.student.user_id).get()
        professional = AppUser.objects.filter(id=instance.professional.user_id).get()

        # notification to student

        notification = NotificationModel(
            title="Acesso ao Diário",
            content=f"O acesso ao diário foi concedido ao profissional {professional}",
            notification_type=NotificationModel.NotificationType.ACCESS.value,
            destination_type=NotificationModel.DestinationType.STUDENT.value,
            destination_user=student,
        )
        notification.save()

        msg = Message(
            notification=Notification(
                title=notification.title,
                body=notification.content,
            )
        )
        device = FCMDevice.objects.filter(user_id=student)
        device.send_message(msg)

        # notification to professional

        notification = NotificationModel(
            title="Acesso ao Diário",
            content=f"O acesso ao diário foi concedido pelo estudante {student}",
            notification_type=NotificationModel.NotificationType.ACCESS.value,
            destination_type=NotificationModel.DestinationType.PROFESSIONAL.value,
            destination_user=professional,
        )
        notification.save()

        msg = Message(
            notification=Notification(
                title=notification.title,
                body=notification.content,
            )
        )
        device = FCMDevice.objects.filter(user_id=professional)
        device.send_message(msg)
