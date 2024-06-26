FROM node:18.13.0

COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]