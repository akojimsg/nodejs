FROM node:18-alpine

WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci

EXPOSE ${PORT}

COPY . .

USER node

CMD ["npm", "run", "start"]
