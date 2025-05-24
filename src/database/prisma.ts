import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "production" ? [] : ["query"],
});

// Arquivo de conexão com o banco de dados Prisma
