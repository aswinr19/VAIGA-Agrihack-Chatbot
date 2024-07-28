import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { promptRoutes } from './routes/prompt'

const app = new Hono()

app.use('/api/*', cors({
  origin: 'http://localhost:3000',
}))
app.use('*', logger())

app.route('/api/prompt', promptRoutes)

export default app
