import { Hono } from 'hono'
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages'

const mdel = new ChatOpenAI(model="gpt-3.5-turbo");

export const promptRoutes = new Hono()
 .get('/',async context => {
    await mdel.invoke([ new HumanMessage({ content: 'hiii' }) ])
})
  .post('/', async context => {

})



