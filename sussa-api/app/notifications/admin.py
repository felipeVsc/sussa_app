from django.contrib import admin
from .models import Notification as NotificationModel

from firebase_admin.messaging import Message, Notification
from fcm_django.models import FCMDevice


@admin.action(description='Publish Notifications for Students')
def publish_notification_students(modeladmin, request, queryset):
    message_queryset = queryset.values('title', 'content')[0]

    msg = Message(
        notification=Notification(title=message_queryset['title'], body=message_queryset['content']), topic='Student'
    )
    FCMDevice.send_topic_message(msg, 'Student')
    queryset.update(published=True)


@admin.action(description='Publish Notifications for Professionals')
def publish_notification_professionals(modeladmin, request, queryset):
    message_queryset = queryset.values('title', 'content')[0]

    msg = Message(
        notification=Notification(title=message_queryset['title'], body=message_queryset['content']), topic='Professional'
    )

    FCMDevice.send_topic_message(msg, 'Professional')
    queryset.update(published=True)


@admin.action(description='Publish Notifications for Everyone')
def publish_notification_all(modeladmin, request, queryset):
    device = FCMDevice.objects.all()
    message_queryset = queryset.values('title', 'content')[0]

    msg = Message(
        notification=Notification(
            title=message_queryset['title'],
            body=message_queryset['content'],
        )
    )

    device.send_message(msg)
    queryset.update(published=True)


class NotificationAdmin(admin.ModelAdmin):
    actions = [
        publish_notification_students,
        publish_notification_all,
        publish_notification_professionals,
    ]
    list_display = [
        'published',
        'title',
        'content',
        'notification_type',
        'destination_type',
    ]


admin.site.register(NotificationModel, NotificationAdmin)
