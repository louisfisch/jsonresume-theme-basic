FROM node:lts-bookworm-slim

ENV RESUME_PUPPETEER_NO_SANDBOX=true \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y --no-install-recommends chromium ca-certificates fonts-liberation && rm -rf /var/lib/apt/lists/*

RUN npm install -g --unsafe-perm=true resume-cli

COPY package.json package-lock.json ./

RUN npm ci

COPY . .