FROM node:18.16.0-alpine
WORKDIR /usr/app

COPY ./package*.json ./
RUN npm install --omit=dev
COPY ./ ./

RUN npm -v
RUN node -v

CMD ["npm", "start"]
