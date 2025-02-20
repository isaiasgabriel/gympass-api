import 'dotenv/config' // import env variables
import { z } from 'zod' // validate env variables

// process.env: {NODE_ENV: 'dev', ...}

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')

  // Why 2 errors?
  // The first will inform the error type
  // The second will stop the application
}

export const env = _env.data
