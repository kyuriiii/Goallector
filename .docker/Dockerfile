FROM node:16.14-alpine

LABEL com.kyuri.image.authors="kyuri99@naver.com"

RUN mkdir -p /app
WORKDIR /app

COPY ./ /app

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]