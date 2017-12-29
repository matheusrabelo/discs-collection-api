FROM node:boron

RUN mkdir -p /discsapi
WORKDIR /discsapi

COPY . /discsapi
RUN npm install
RUN npm run build

EXPOSE 8080
CMD npm run server
