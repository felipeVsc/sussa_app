from django.db import models


def define_service_img_path(instance, filename):
    return f"services/{instance.name}/{filename}"


class Service(models.Model):
    visible = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    content = models.TextField()
    cta = models.CharField(max_length=100)
    link = models.URLField()
    photo = models.ImageField(upload_to=define_service_img_path, null=True)
