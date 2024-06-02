import { useState } from 'react';
import './App.css'
import PromptInput from './components/promptInput.tsx';
import Canvas from './components/canvas.tsx';

interface MessageInterface {
  message: string;
  timestamp: Date;
  direction: string;
}

const App = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  
  setMessages([{ message: 'hello world', timestamp: new Date(), direction: 'sent' }]);
  return (
    <>
      <div className=''>
        <Canvas 
          messages={messages}
        /> 
        <PromptInput /> 
      </div>
   </>
  )
}

export default App
