# This Dockerfile builds an image to expose a dummy graphql
# authorizer as it's expected by the implementation under lib/authorization/graphql_authorizer.rb
FROM node:8.11.4-alpine
RUN apk update && apk add yarn
RUN yarn global add nodemon
WORKDIR /usr/app

COPY package.json yarn.lock /usr/app/
RUN yarn


# Expose port 4000 to the Docker host, so we can access it from the outside
EXPOSE 3000


