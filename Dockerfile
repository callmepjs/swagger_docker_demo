FROM node
MAINTAINER Prabjeet Singh 

RUN mkdir /root/demo

COPY package.json /root/demo
WORKDIR /root/demo
RUN npm install

ENV PATH=/root/demo/node_modules/.bin:$PATH

COPY . /root/demo

WORKDIR /root/demo
EXPOSE 8080

CMD ["node", "index.js"] 
