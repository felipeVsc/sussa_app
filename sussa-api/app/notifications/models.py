from django.db import models
from app.user.models import AppUser


class Notification(models.Model):
    class NotificationType(models.TextChoices):
        CHAT = 'C'
        INFORMATIVE = 'I'
        PHRASE = 'PH'
        ACCESS = 'AC'

    class DestinationType(models.TextChoices):
        ALL = 'A'
        STUDENT = 'S'
        PROFESSIONAL = 'P'

    title = models.TextField()
    content = models.TextField()
    notification_type = models.CharField(
        max_length=50,
        choices=NotificationType.choices,
    )
    published = models.BooleanField(default=False)
    destination_type = models.CharField(
        max_length=50,
        choices=DestinationType.choices,
    )
    destination_user = models.ForeignKey(
        AppUser,
        on_delete=models.CASCADE,
        null=True,
        default=None,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
