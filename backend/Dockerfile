# Specify a base image
FROM node:14

# Copy files into the container
COPY ./package.json ./
RUN npm install
# Install dependecies

COPY ./ ./

EXPOSE 8000
# Default command
CMD ["npm", "start"]
