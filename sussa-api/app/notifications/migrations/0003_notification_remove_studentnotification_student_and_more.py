# Generated by Django 4.1.7 on 2023-04-11 00:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('notifications', '0002_alter_professionalnotification_professional_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('content', models.TextField()),
                ('notification_type', models.CharField(max_length=50)),
                ('published', models.BooleanField(default=False)),
                ('destination_type', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('destination_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='studentnotification',
            name='student',
        ),
        migrations.DeleteModel(
            name='ProfessionalNotification',
        ),
        migrations.DeleteModel(
            name='StudentNotification',
        ),
    ]
