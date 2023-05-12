FROM node:16.17.0-bullseye-slim

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

ENTRYPOINT ["npm", "start"]