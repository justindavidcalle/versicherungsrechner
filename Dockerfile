FROM node:16.15.0-bullseye-slim

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

ENTRYPOINT ["npm", "start"]