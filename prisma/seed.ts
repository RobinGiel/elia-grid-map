import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getUsers = (): Prisma.UserCreateInput[] => [
  {
    email: "test@mail.com",
    name: "test",
    password: "test",
  },
];
