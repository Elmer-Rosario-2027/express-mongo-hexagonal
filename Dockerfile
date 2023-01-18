FROM node:16-alpine

RUN npm install g ts-node 

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm build

EXPOSE 3000

CMD ["npm", "start"]
