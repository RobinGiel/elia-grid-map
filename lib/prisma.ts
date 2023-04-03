import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // Prevent multiple instances of Prisma Client in development
  globalThis["prisma"] = globalThis["prisma"] || new PrismaClient();
  prisma = global.prisma;
}

export default prisma;
