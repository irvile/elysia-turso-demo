# Elysia 

## Getting Started

```bash
bun create elysia elysia-turso-demo
cd elysia-turso-demo
bun install
```

## Turso Database

```bash
turso db create elysia-turso-demo
turso db show elysia-turso-demo # URL value will be the TURSO_DATABASE_URL variable
turso db tokens create elysia-turso-demo # token will be the TURSO_DATABASE_AUTH_TOKEN variable
```

## Migrations

```bash
bunx prisma migrate dev --name init

# Update turso database schema. Change your migration name accordingly.
turso db shell elysia-turso-demo < ./prisma/migrations/20240310190800_init/migration.sql 
```

## Development
To start the development server run:
```bash
bun run dev
```
Open http://localhost:3000/ with your browser to see the result.


## Deployment


```bash
fly launch
```


