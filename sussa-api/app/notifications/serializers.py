from rest_framework import serializers
from .models import Notification
from fcm_django.models import FCMDevice


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = [
            'id',
            'title',
            'content',
            'notification_type',
            'published',
            'destination_type',
            'destination_user',
            'created_at',
        ]


class FCMDeviceSerializer(serializers.ModelSerializer):

    class Meta:
        model = FCMDevice
        fields = ['id', 'registration_id', 'user', 'type']
