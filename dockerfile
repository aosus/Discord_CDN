FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm run setup
CMD "npm" "run" "start"