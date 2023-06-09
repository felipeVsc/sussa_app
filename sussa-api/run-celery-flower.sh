#!/bin/sh

set -o errexit
set -o nounset

worker_ready() {
    celery -A app.celery inspect ping
}

until worker_ready; do
  >&2 echo 'Celery workers not available'
  sleep 1
done
>&2 echo 'Celery workers is available'

celery -A app.celery --broker="${CELERY_BROKER}" flower --port=8000
