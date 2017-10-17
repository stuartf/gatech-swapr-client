# Use Ubuntu as base image
FROM ubuntu:latest

# Update apt-get to latest version
RUN apt-get update
# Install build-essentials
RUN apt-get install -y build-essential libssl-dev
# Install node
RUN apt-get install -y nodejs-legacy
# Install npm
RUN apt-get install -y npm
# Install Ruby
RUN apt-get install -y ruby-full
# Install Sass
RUN gem install sass --no-user-install

# Expose port 3000 on the container (must bind to host port in either docker run command or docker compose file)
#EXPOSE 3000

# Add working directory to container
ADD . /client
WORKDIR /client

# Client build process
RUN npm uninstall grunt-cli
RUN npm install
RUN npm uninstall bower
RUN npm install -g bower
RUN bower install --allow-root
RUN npm uninstall grunt-cli
RUN npm install -g grunt-cli
RUN grunt dev

# Default command
CMD ["/bin/sh"]
