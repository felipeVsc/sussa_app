FROM python:3.11.2-alpine

# Set work directory
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install Postgres dependencies
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

# Install app dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy project
COPY . .

ENTRYPOINT ["sh", "entrypoint-app.sh"]
