import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { promptRoutes } from './routes/prompt'

const app = new Hono()

app.use('*', logger())

app.get('/', context => {
  return context.json({ message: 'Hello Hono!'})
})

app.route('/api/prompt', promptRoutes)

export default app
