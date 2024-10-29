FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build --production

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
