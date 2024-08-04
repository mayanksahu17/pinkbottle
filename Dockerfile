FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install react-slick slick-carousel

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


