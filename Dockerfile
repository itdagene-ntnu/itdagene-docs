FROM node:14.1.0
MAINTAINER Peder Smith <smithpeder@gmail.com>

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
