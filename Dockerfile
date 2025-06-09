
FROM node:latest
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["npm","run" ,"dev"]
# This Dockerfile sets up a Node.js application in a Docker container.
