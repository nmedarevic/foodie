# Specify a base image
FROM node:14


# Copy files into the container
COPY ./package.json ./
RUN npm install
RUN npm install create-next-app
# Install dependecies

COPY ./ ./

EXPOSE 3000
# Default command
CMD ["npm","run", "build"]
CMD ["npm", "run", "dev"]
