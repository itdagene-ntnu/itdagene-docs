FROM node:alpine as builder
MAINTAINER Peder Smith <smithpeder@gmail.com>

WORKDIR /app

COPY website/package.json .
COPY website/yarn.lock .
RUN yarn --ignore-scripts

COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn build

FROM node:alpine
MAINTAINER Peder Smith <smithpeder@gmail.com>

WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

CMD [ "yarn", "start"]