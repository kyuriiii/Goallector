FROM node:14.7

LABEL com.spreatics.image.authors="duru@spreatics.com"

RUN mkdir -p /app
WORKDIR /app

COPY ./posco /app

ENV NODE_ENV developments

RUN npm install

EXPOSE 9999

## 디비 초기화

CMD ["npm", "start"]

