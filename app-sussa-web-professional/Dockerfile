FROM node:18-alpine

# Set work directory
WORKDIR /app

# Copy project
COPY . .

# Install dependencies
RUN yarn install

EXPOSE 8000
CMD [ "yarn", "start" ]