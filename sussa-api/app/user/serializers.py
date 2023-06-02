import re

from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from app.course.models import Course
from .models import AppUser, Professional, Student
from .validators import crp_validator, institutional_email_validator

class AccountSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=255)
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)

    def validate_email(self, value):
        validator = institutional_email_validator

        if not re.search(validator.regex, value):
            raise serializers.ValidationError(validator.message)
        return value

    def validate_password(self, value):
        validate_password(value)
        return value

    def validate(self, data):
        email = data['email']

        if AppUser.objects.filter(email=email).exists():
            raise serializers.ValidationError('A user with this email already exists.')

        return data


class StudentSerializer(AccountSerializer):
    course = serializers.IntegerField(min_value=1)

    def validate_course(self, value):
        if not Course.objects.filter(id=value).exists():
            raise serializers.ValidationError('This course doesn\'t exists.')
        return value


class StudentUpdateSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    course_id = serializers.IntegerField(min_value=1)

    def validate_course_id(self, value):
        if not Course.objects.filter(id=value).exists():
            raise serializers.ValidationError('This course doesn\'t exists.')
        return value

class StudentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class ProfessionalSerializer(AccountSerializer):
    crp = serializers.RegexField(regex=crp_validator.regex)

    def validate_crp(self, value):
        if Professional.objects.filter(crp=value).exists():
            raise serializers.ValidationError('This CRP number is already in use.')
        return value


class ProfessionalUpdateSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)


# TODO GAMBIARRA/FAZER A MESMA NO STUDENTMODEL QUANDO MERGEAR
class ProfessionalModelSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()
    photo = serializers.SerializerMethodField()

    class Meta:
        model = Professional
        fields = ["id","first_name","last_name","crp","status","description","photo","role"]

    def get_id(self, obj):
        return obj.user_id

    def get_photo(self, obj):
        try:
            return AppUser.objects.get(id=obj.user_id).photo.url
        except ValueError:
            return None