# development client watcher using parceljs

# Use Ubuntu as base image
FROM node:8.7.0

# Install node dependencies
RUN npm install yarn 

RUN mkdir -p /data/node_modules

WORKDIR /data
COPY package.json yarn.lock /data/

RUN yarn --pure-lockfile

ENV PATH /data/node_modules/.bin:$PATH

RUN mkdir -p /data/src

ADD . /data/src
WORKDIR /data/src

# Default command
CMD ["yarn", "run", "--modules-folder /data/node_modules", "docker-watch"]
