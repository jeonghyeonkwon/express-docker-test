FROM node:14-alpine

COPY package*.json /usr/src/app/

WORKDIR /usr/src/app
RUN npm install

COPY . /usr/src/app
EXPOSE 8000
CMD node ./build/app.js
