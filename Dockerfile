FROM node:10

COPY [".", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

EXPOSE 4000

CMD npm start