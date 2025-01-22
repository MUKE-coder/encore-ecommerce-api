import { SQLDatabase } from "encore.dev/storage/sqldb";
import { PrismaClient } from "@prisma/client";
const DB = new SQLDatabase("ecommerce-db", {
  migrations: {
    path: "./prisma/migrations",
    source: "prisma",
  },
});

// Setup prisma client with connection string
const db = new PrismaClient({
  datasources: {
    db: {
      url: DB.connectionString,
    },
  },
});
export { db };
