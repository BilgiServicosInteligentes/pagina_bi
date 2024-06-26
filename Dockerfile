FROM node:20.9.0

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]