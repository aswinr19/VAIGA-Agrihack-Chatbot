import { Hono } from 'hono'
import { ChatOpenAI } from "@langchain/openai"
import { HumanMessage } from "@langchain/core/messages";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";

const app = new Hono()

const model = new ChatOpenAI(model="gpt-3.5-turbo");

const messageHistories: Record<string, InMemoryChatMessageHistory> = {};

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful assistant who remembers all details the user shares with you.`,
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

const chain = prompt.pipe(model);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/ask', askGpt(c))

const askGPT = async (context) => {
 const modelReponse = await model.invoke([new HumanMessage({ content: context.prompt })])

  return context.json({ response: modelReponse })
};

export default app


