from rest_framework import serializers
from .models import Service


class ServiceSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = ["id", "name", "content", "cta", "link", "photo"]

    def get_photo(self, obj):
        return obj.photo.url
