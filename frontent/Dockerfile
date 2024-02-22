FROM node

WORKDIR /app/frontent

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]