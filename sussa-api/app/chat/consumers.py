import json
from urllib.parse import parse_qs

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from django.db.models import Q
from rest_framework.authtoken.models import Token
from .models import Chat, ChatMessage


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        params = parse_qs(self.scope['query_string'])

        self.auth_token = params[b'token'][0].decode('utf-8')
        self.chat_id = int(self.scope['url_route']['kwargs']['chat_id'])

        token = Token.objects.filter(key=self.auth_token)
        if not token:
            self.close()
            return

        user = token.first().user
        self.user_id = user.id

        chat = Chat.objects.filter(pk=self.chat_id).filter(
            Q(chat_request__from_user=user) |
            Q(chat_request__to_user=user)
        )
        if not chat:
            self.close()
            return

        self.room_group_name = "chat_%s" % self.chat_id

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        if not hasattr(self, 'room_group_name'):
            return

        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        obj = ChatMessage.objects.create(
            chat_id=self.chat_id,
            from_user=self.user_id,
            text=message,
        )

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'from_user': obj.from_user,
                'message': obj.text,
                'sent_at': obj.sent_at.isoformat()
            }
        )

    def chat_message(self, event):
        message = {
            'from_user': event['from_user'],
            'message': event['message'],
            'sent_at': event['sent_at'],
        }

        self.send(text_data=json.dumps(message, default=str))
