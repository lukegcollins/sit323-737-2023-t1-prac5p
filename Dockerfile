FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

HEALTHCHECK --interval=10s --timeout=2s --start-period=15s \  
    CMD node src/app/modules/service/health-check/healthcheck.js

EXPOSE 8080
CMD [ "npm", "run", "start" ]
