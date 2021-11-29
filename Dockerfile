#Build Stage
FROM node:14-alpine AS builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
COPY .env .
RUN npm run build

#Production Stage
FROM nginx:1.21.3-alpine
WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
COPY  ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist ./
ENTRYPOINT ["nginx","-g","daemon off;"]
