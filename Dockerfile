##### DEPENDENCIES

FROM node:16-alpine3.17 AS deps
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

# Install Prisma Client - remove if not using Prisma
COPY .env .env
COPY prisma ./

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
 if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
 elif [ -f package-lock.json ]; then npm ci; \
 elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
 else echo "Lockfile not found." && exit 1; \
 fi

##### RUNNER

FROM node:16-alpine3.17 AS runner
WORKDIR /app

ENV NODE_ENV development

# Install Prisma Client - remove if not using Prisma
COPY .env .env
COPY prisma ./

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
 if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
 elif [ -f package-lock.json ]; then npm ci; \
 elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
 else echo "Lockfile not found." && exit 1; \
 fi

# Copy the entire project directory
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port for Next.js development server
EXPOSE 3000

CMD ["npm", "run", "dev"]