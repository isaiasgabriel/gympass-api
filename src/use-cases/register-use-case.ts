import { UsersRepositoryInterface } from '@/repositories/user-repository-interface'
import { hash } from 'bcryptjs'

interface RegisterUseCaseParams {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async create({ name, email, password }: RegisterUseCaseParams) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('E-mail already exists')
    }

    const password_hash = await hash(password, 6)


    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
