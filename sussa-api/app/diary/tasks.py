from app.celery import app
from .models import DiaryReport

import environ
import requests
import json


RETRY_SECONDS = 60 # 1 minute


@app.task(
    autoretry_for=(Exception,),
    default_retry_delay=RETRY_SECONDS,
    retry_kwargs={'max_retries': 3},
)
def infer_report_emotion(pk):
    try:
        report = DiaryReport.objects.get(pk=pk)
        if report.emotion:
            return

        env = environ.Env()
        environ.Env.read_env('.env')

        response = requests.get('{nlp_url}/extract-emotion?text={text}'.format(
            nlp_url=env('NLP_URL'),
            text=report.content,
        ))
        if response.status_code != 200:
            raise Exception('Unable to infer emotion: {status_code} - {reason}'.format(
                status_code=response.status_code,
                reason=response.reason,
            ))

        response_dict = json.loads(response.content.decode('utf-8'))
        report.emotion = response_dict['emotion']
        report.save()

        print('Emotion "{emotion}" was infered to "{content}"'.format(
            emotion=report.emotion,
            content=report.content
        ))
    except DiaryReport.DoesNotExist:
        pass
