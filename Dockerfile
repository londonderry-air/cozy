# reference: https://github.com/vercel/next.js/discussions/16995
FROM node:16 AS builder

ARG graphql_endpoint

# For install devDependency libralies
ENV NODE_ENV=development

# environment variables
ENV SPOTIFY_CLIENT_ID=$spotify_client_id
ENV SPOTIFY_SECRET_ID=$spotify_secret_id
ENV NEXT_PUBLIC_COZY_ISDEVELOP=$cozy_isdevelop

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm build


FROM node:16-stretch-slim AS runner
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./

RUN npm install
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
CMD ["npm", "start"]
