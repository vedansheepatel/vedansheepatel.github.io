#Using this static website to practise docker containerization - VP

#Use a base image for a static web page 
# nginx:alpine- lightweight, fast, secure and has full working nginx web server
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy from my current folder on my machine into the folder NGINX uses
COPY . /usr/share/nginx/html

# Listen on port 80 -  standard HTTP port
EXPOSE 80