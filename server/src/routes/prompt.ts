import { Hono } from 'hono'

export const promptRoutes = new Hono()
 .get('/', context => {
    return context.json({ message: 'answer received'})
})
  .post('/', context => {
    return context.json({ message: 'prompt sent'})
})



