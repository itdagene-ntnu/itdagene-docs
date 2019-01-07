FROM node:8.11.4
MAINTAINER Peder Smith <smithpeder@gmail.com>

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
