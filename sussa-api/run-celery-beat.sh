#!/bin/sh

set -o errexit
set -o nounset

rm -f './celerybeat.pid'
celery -A app.celery beat -l INFO
