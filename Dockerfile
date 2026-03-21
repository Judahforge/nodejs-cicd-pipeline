# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /nodejs-cicd-pipeline

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]