FROM node:12.13.1

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install

COPY dist /code/dist

COPY server.js /code/server.js

# RUN ng build

CMD ["npm", "start"]