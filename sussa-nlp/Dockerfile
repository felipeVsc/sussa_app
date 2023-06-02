FROM ubuntu:22.04

# Set work directory
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update \
    # dependencies for building Python packages
    && apt-get install -y build-essential python3-pip \
    && apt-get install -y git git-lfs \
    && git lfs install \
    # cleaning up unused files
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/*

# Install app dependencies
RUN pip3 install --upgrade pip

COPY ./requirements.txt .

RUN pip3 install -r requirements.txt
RUN pip3 install torch==2.0.1 --index-url https://download.pytorch.org/whl/cpu

# Download NLP model
RUN git clone https://huggingface.co/michellejieli/emotion_text_classifier \
    && rm -rf emotion_text_classifier/.git

# Copy project
COPY . .

CMD ["sh", "run.sh"]
