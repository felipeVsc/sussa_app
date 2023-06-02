# Generated by Django 4.1.7 on 2023-04-10 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professionalnotification',
            name='professional',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user.professional'),
        ),
        migrations.AlterField(
            model_name='studentnotification',
            name='student',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user.student'),
        ),
    ]