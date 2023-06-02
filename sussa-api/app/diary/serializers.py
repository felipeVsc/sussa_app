from rest_framework import serializers
from .models import DiaryReport, DiaryAccess


class DiaryReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaryReport
        fields = ["id", "student", "content", "emotion", "created_at"]


class DiaryAccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaryAccess
        fields = ["id", "student", "professional"]
