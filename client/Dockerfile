FROM node:18.8.0-alpine AS builder
ENV NODE_ENV production

# Build React App
WORKDIR /app
COPY . .
RUN npm ci
ARG REACT_APP_BACKEND
ENV REACT_APP_BACKEND=$REACT_APP_BACKEND
RUN npm run build

# Serve
FROM node:18.8.0-alpine
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]