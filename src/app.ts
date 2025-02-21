import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

export const app = fastify()

const prisma = new PrismaClient()

// Checking the types created from prisma (npx prisma generate)
prisma.user.create({
  data: {
    name: 'test',
    email: 'test',
  },
})
