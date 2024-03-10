import { Elysia } from "elysia";

import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import { z } from "zod";

const envSchema = z.object({
  TURSO_DATABASE_URL: z.string(),
  TURSO_DATABASE_AUTH_TOKEN: z.string(),
});

const appEnv = envSchema.parse(process.env);

const libsql = createClient({
  url: appEnv.TURSO_DATABASE_URL,
  authToken: appEnv.TURSO_DATABASE_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

const app = new Elysia()
  .get("/users", async () => {
    const users = await prisma.user.findMany();

    return users;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
