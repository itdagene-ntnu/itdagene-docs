FROM node:alpine as builder

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

COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/website/build .
RUN yarn --prod