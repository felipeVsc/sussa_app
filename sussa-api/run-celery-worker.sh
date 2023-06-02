#!/bin/sh

set -o errexit
set -o nounset

celery -A app.celery worker --pool=eventlet --concurrency=8 -l INFO
