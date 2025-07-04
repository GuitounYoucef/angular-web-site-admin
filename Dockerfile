# FROM node:lts

# WORKDIR /project

# RUN npm install -g @angular/cli@16

# COPY package.json package-lock.json ./
# RUN npm i

# COPY . .

# EXPOSE 4200
# CMD ["npm", "start"]


# FROM node:lts
# WORKDIR /usr/src/app
# COPY . /usr/src/app
# RUN npm install
# CMD "npm" "start"


FROM node:latest as build
#Create a directory for the application
WORKDIR /usr/local/app
COPY ./ /usr/local/app
#Install the application dependencies
RUN npm install
#Build the application
RUN npm run build


FROM nginx:latest
COPY --from=build /usr/local/app/dist/serverfront-micro-serv /usr/share/nginx/html
#Expose port 4200
EXPOSE 4200
