import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0', // makes it accessible on the front end
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
