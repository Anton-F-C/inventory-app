FROM node:14

# Install jq
RUN apt-get update && apt-get install -y jq

# Create app directory
WORKDIR /opt/inventory-app

# Copy application files
COPY . .

# Install app dependencies
RUN npm install

# Build the application
RUN npm run build

# Make the start script executable
RUN chmod +x start.sh

# Start the application
CMD ["./start.sh"]