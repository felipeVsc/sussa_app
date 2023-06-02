from app.celery import app
from .models import Professional

import environ
import requests


RETRY_SECONDS = 60*60 # 1 hour


@app.task(
    autoretry_for=(Exception,),
    default_retry_delay=RETRY_SECONDS,
    retry_kwargs={'max_retries': 3},
)
def check_professional_crp(pk):
    env = environ.Env()
    environ.Env.read_env('.env')

    query = Professional.objects.filter(pk=pk)
    if not query:
        print(
            "Professional with ID {pk} doesn't exists, ignoring".format(pk=pk))
        return

    professional = query.first()
    if professional.status != Professional.Status.PENDING.value:
        print("Professional already checked")
        return

    response = requests.get('{crp_url}/check-crp?crp={crp}&first_name={first_name}'.format(
        crp_url=env('CRP_URL'),
        crp=professional.crp,
        first_name=professional.first_name,
    ))
    if response.status_code != 200:
        raise Exception('Unable to check CRP: {status_code} - {reason}'.format(
            status_code=response.status_code,
            reason=response.reason,
        ))

    if response.content['is_valid']:
        professional.status = Professional.Status.APPROVED.value
    else:
        professional.status = Professional.Status.DECLINED.value

    professional.save()

    print("The CRP {crp} is {status}".format(
        crp=professional.crp,
        status=professional.status
    ))
