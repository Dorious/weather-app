# Install dependencies only when needed
FROM node:alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
COPY packages/ ./packages
RUN yarn install --frozen-lockfile
RUN yarn build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# API
COPY --from=builder /app/packages/api/package.json ./packages/api/package.json
COPY --from=builder /app/packages/api/dist ./packages/api/dist
# NextJS App
COPY --from=builder /app/packages/app/next.config.js ./packages/app/next.config.js
COPY --from=builder /app/packages/app/public ./packages/app/public
COPY --from=builder /app/packages/app/.next ./packages/app/.next
COPY --from=builder /app/packages/app/package.json ./packages/app/package.json
# Misc
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Install prod deps
RUN yarn install --frozen-lock --production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/packages/app/.next
USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]