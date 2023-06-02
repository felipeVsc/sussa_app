from enum import Enum
from django.db import models
from app.user.models import AppUser


class ChatRequest(models.Model):

    class Status(Enum):
        PENDING = 'P'
        ACCEPTED = 'A'
        DECLINED = 'D'

        @classmethod
        def choices(cls):
            return [(key.value, key.name) for key in cls]

    from_user = models.ForeignKey(
        AppUser,
        on_delete=models.CASCADE,
        related_name='from_user',
    )
    to_user = models.ForeignKey(
        AppUser,
        on_delete=models.CASCADE,
        related_name='to_user',
    )
    status = models.CharField(
        max_length=1,
        choices=Status.choices(),
        default=Status.PENDING.value,
    )


class Chat(models.Model):

    class Status(Enum):
        OPEN = 'O'
        CLOSED = 'C'

        @classmethod
        def choices(cls):
            return [(key.value, key.name) for key in cls]

    chat_request = models.OneToOneField(ChatRequest, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=1,
        choices=Status.choices(),
        default=Status.OPEN.value,
    )


class ChatMessage(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    from_user = models.PositiveBigIntegerField()
    text = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
