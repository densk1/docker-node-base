FROM node:8.11.4-alpine

RUN apk update && apk add yarn
RUN yarn global add nodemon

WORKDIR /usr/app

RUN mkdir /usr/app/node_modules/

COPY package.json yarn.lock /usr/app/
RUN yarn

EXPOSE 3000
