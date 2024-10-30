import { env } from "@/app/data/env/server";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
