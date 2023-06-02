# Generated by Django 4.1.7 on 2023-04-11 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0004_alter_notification_destination_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='destination_type',
            field=models.CharField(choices=[('A', 'All'), ('S', 'Student'), ('P', 'Professional')], max_length=50),
        ),
        migrations.AlterField(
            model_name='notification',
            name='notification_type',
            field=models.CharField(choices=[('C', 'Chat'), ('I', 'Informative'), ('PH', 'Phrase')], max_length=50),
        ),
    ]
