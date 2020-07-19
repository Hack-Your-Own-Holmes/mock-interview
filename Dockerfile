# Stage 1 - the build process
FROM node:12.18 as build-deps

COPY . ./

RUN npm install

RUN npm run build

RUN npm install --global http-server

# Stage 2 - the production environment
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/configfile.template

ENV PORT 8080

ENV HOST 0.0.0.0

RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"

COPY --from=build-deps build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
