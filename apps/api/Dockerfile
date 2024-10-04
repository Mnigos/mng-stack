FROM bitnami/node:20.17.0 as development

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM bitnami/node:20.17.0 as production

ARG NODE_ENV=production
ARG EnvironmentVariable
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --production --ignore-scripts

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]

