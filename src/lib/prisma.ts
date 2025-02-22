import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
  // if NODE_ENV is set to dev it'll show query logs on the terminal
  // otherwise it'll show nothing
})
