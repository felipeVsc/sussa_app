from enum import Enum
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from app.course.models import Course
from .managers import AppUserType, AppUserManager
from .validators import *


def define_user_img_path(instance, filename):
    return f"{instance.user_type}/{instance.email}/{filename}"


class AppUser(AbstractBaseUser):
    email = models.EmailField(
        max_length=255,
        unique=True,
        validators=[institutional_email_validator],
    )
    user_type = models.CharField(
        max_length=1,
        choices=AppUserType.choices(),
        default=AppUserType.NONE.value,
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    photo = models.ImageField(upload_to=define_user_img_path, null=True)
    objects = AppUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


class Student(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    course = models.ForeignKey(
        Course,
        null=True,
        default=None,
        on_delete=models.SET_DEFAULT,
    )

    def save(self, email, password, *args, **kwargs):
        user = AppUser.objects.create_user(
            email,
            password,
            AppUserType.STUDENT.value,
        )
        self.user = user
        super(Student, self).save(*args, **kwargs)


class Professional(models.Model):

    class Status(Enum):
        PENDING = 'P'
        APPROVED = 'A'
        DECLINED = 'D'

        @classmethod
        def choices(cls):
            return [(key.value, key.name) for key in cls]

    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    crp = models.CharField(
        max_length=6,
        unique=True,
        validators=[crp_validator],
    )
    status = models.CharField(
        max_length=1,
        choices=Status.choices(),
        default=Status.PENDING.value,
    )
    description = models.CharField(max_length=500,null=True)
    role = models.CharField(max_length=255,null=True)

    def save(self, email, password, *args, **kwargs):
        user = AppUser.objects.create_user(
            email,
            password,
            AppUserType.PROFESSIONAL.value,
        )
        self.user = user
        super(Professional, self).save(*args, **kwargs)
