FROM selenium/standalone-chrome:111.0

# Set work directory
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN sudo apt-get update \
 && DEBIAN_FRONTEND=noninteractive sudo apt-get install -y --no-install-recommends python3 python3-pip \
 && sudo apt-get clean \
 && sudo rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN pip install -U pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy project
COPY . .

EXPOSE 8000
CMD ["sh", "run.sh"]
