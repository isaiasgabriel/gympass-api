import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { UsersRepositoryInterface } from '../user-repository-interface'

export class PrismaUsersRepository implements UsersRepositoryInterface {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async create({ name, email, password_hash }: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    })

    return user
  }
}
