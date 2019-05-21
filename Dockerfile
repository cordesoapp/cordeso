# base image
FROM node:10.11.0

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@latest -g

# Bundle app source
COPY . .

EXPOSE 80
# start app
CMD ["npm", "start"]
