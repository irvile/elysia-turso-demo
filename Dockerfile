FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./

RUN npm install -g bun

RUN bun install

# Copy the rest of your application's code to the working directory
COPY . .

RUN bunx prisma generate

EXPOSE 3000


CMD ["bun", "src/index.ts"]