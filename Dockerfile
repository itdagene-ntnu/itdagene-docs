FROM node:alpine as builder
MAINTAINER Peder Smith <smithpeder@gmail.com>

WORKDIR /app

COPY website/package.json website/
COPY website/yarn.lock website/

WORKDIR /app/website

RUN yarn --ignore-scripts

COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn build

FROM node:alpine
MAINTAINER Peder Smith <smithpeder@gmail.com>

COPY --from=builder /app/website/build .