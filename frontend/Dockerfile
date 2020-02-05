FROM node

# Create app directory
WORKDIR /usr/src/frontend

# Expose port for service
EXPOSE 3000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN npm install

# Build app and start server from script
#RUN npm start
