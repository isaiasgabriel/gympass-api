import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from '../register-use-case'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
  it('should be able to hash password upon register', async () => {
    const registerUseCase = new RegisterUseCase({
      async findByEmail(email) {
        return null
      },

      async create({ name, email, password_hash }) {
        return {
          id: 'user-1',
          name,
          email,
          password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerUseCase.create({
      name: 'User',
      email: 'user@user.com',
      password: '123456',
    })

    const isPasswordHashed = await compare('123456', user.password_hash)

    expect(isPasswordHashed).toBe(true)
  })
})
