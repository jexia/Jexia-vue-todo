FROM node:14.0.0
WORKDIR /app
COPY . .
RUN npm install && npm build
ENTRYPOINT npm run start