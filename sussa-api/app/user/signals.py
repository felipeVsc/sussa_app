from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Professional
from .tasks import check_professional_crp


@receiver(post_save, sender=Professional)
def check_professional_crp_async(sender, instance, created, **kwargs):
    if created:
        pk = instance.pk
        check_professional_crp.s(pk).apply_async()
