import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/ask', (c) => {
  return c.json({ reply: 'hello' });
});
export default app
