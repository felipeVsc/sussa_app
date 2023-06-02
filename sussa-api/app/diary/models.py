from django.db import models
from app.user.models import Student, Professional


class DiaryReport(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    content = models.TextField()
    emotion = models.CharField(max_length=30, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class DiaryAccess(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE)
