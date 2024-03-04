# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install any dependencies
RUN npm install --legacy-peer-deps
RUN npm install --legacy-peer-deps react-wordcloud

# Bundle your app's source code inside the Docker image
COPY . .

# Change permissions of the Next.js executable
RUN chmod +x ./node_modules/.bin/next

# Build your Next.js app
RUN npm run build

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
