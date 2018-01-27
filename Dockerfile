FROM node:9.4

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 1337

CMD ["npm", "start"]
