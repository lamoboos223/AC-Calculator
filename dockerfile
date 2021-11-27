FROM node:14.15.4
WORKDIR /app
COPY . .
CMD ["npm", "start"]
