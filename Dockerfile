FROM node:20-alpine

COPY package.json /app/
COPY server.mjs /app/
COPY index.js /app/
COPY games.js /app/

WORKDIR /app

RUN npm install

EXPOSE 4080
CMD [ "node", "server.mjs" ]


