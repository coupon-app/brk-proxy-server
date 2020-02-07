FROM node:latest

RUN mkdir -p /src/checkout

WORKDIR /src/checkout

COPY . /src/checkout

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]