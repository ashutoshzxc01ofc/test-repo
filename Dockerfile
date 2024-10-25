FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci typescript --save-dev

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
