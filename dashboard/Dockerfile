FROM node:8.9-alpine

RUN mkdir -p /app
WORKDIR /app

# RUN npm install -g nodemon
# RUN npm config set registry https://registry.npmjs.org
# COPY package.json .
COPY . .
RUN rm -rf node_modules && npm install 
#  && npm i react-table \
#  && npm i styled-components \
# && npm cache clean --force \
# && mv /app/node_modules /node_modules
#ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
