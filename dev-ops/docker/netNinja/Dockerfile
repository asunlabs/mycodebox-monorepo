# FROM : Set the baseImage to use for subsequent instructions. 
# FROM must be the first instruction in a Dockerfile.
FROM node:17-alpine

RUN npm install -g nodemon

# Set the working directory for any subsequent ADD, COPY, CMD, 
# ENTRYPOINT, or RUN instructions that follow it in the Dockerfile
WORKDIR /app

# COPY : Copy files or folders from source 
# to the dest path in the image's filesystem.
# Note that copy directory is relative to WORKDIR above. 
COPY package.json .

# Execute any commands on top of the current image 
# as a new layer and commit the results.
RUN npm install 

COPY . .

# Define the network ports that this container will listen on at runtime.
EXPOSE 4000

# Provide defaults for an executing container. 
# If an executable is not specified, then ENTRYPOINT must be specified as well. 
# There can only be one CMD instruction in a Dockerfile.
CMD ["npm", "run", "dev"]