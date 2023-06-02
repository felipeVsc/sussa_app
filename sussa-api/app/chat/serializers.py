from rest_framework import serializers
from .models import ChatRequest, Chat, ChatMessage


class ChatRequestSerializer(serializers.Serializer):
    to_user = serializers.IntegerField(min_value=1)


class ChatRequestListIncomingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRequest
        fields = ['id', 'from_user', 'status']


class ChatRequestListOutgoingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRequest
        fields = ['id', 'to_user', 'status']


class ChatRequestAcceptSerializer(serializers.Serializer):
    accept = serializers.BooleanField()


class ChatListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['id', 'status']


class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = ['from_user', 'text', 'sent_at']
