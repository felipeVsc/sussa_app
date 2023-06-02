# Generated by Django 4.1.7 on 2023-03-30 19:54

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('user_type', models.CharField(choices=[('N', 'NONE'), ('A', 'ADMIN'), ('S', 'STUDENT'), ('P', 'PROFESSIONAL')], default='N', max_length=1)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('phone', models.CharField(blank=True, max_length=11, validators=[django.core.validators.RegexValidator(message='Phone number must have 11 digits.', regex='^\\d{11}$')])),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Professional',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('phone', models.CharField(blank=True, max_length=11, validators=[django.core.validators.RegexValidator(message='Phone number must have 11 digits.', regex='^\\d{11}$')])),
                ('crp', models.CharField(max_length=4, validators=[django.core.validators.RegexValidator(message='CRP register number must have 4 digits.', regex='^\\d{4}$')])),
                ('status', models.CharField(choices=[('P', 'PENDING'), ('A', 'APPROVED'), ('D', 'DECLINED')], default='P', max_length=1)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]