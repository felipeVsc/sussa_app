from enum import Enum
from django.contrib.auth.models import BaseUserManager


class AppUserType(Enum):
    NONE = 'N'
    ADMIN = 'A'
    STUDENT = 'S'
    PROFESSIONAL = 'P'

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]


class AppUserManager(BaseUserManager):

    def create_user(self, email, password, user_type=AppUserType.NONE.value):
        if not email or not password:
            raise ValueError('User must have email and password')

        user = self.model(email=self.normalize_email(email))
        user.user_type = user_type
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password, AppUserType.ADMIN.value)
        user.is_admin = True
        user.save(using=self._db)

        return user
