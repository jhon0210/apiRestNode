FROM node:20.11.1

WORKDIR /apirestPrueba
COPY package.json .
RUN npm install

COPY . .
CMD node swagger.js

