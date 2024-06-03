import { useState } from 'react';
import './App.css'
import PromptInput from './components/promptInput.tsx';

interface MessageInterface {
  message: string;
  timestamp: Date;
  direction: string;
}

const App = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sentPropmt = async ( prompt: string ) => {
    const userPrompt: MessageInterface = {
      message: prompt,
      timestamp: new Date,
      direction: 'sent'
    };  
  
    setMessages(prevMessages => [...prevMessages, userPrompt]);
    setLoading(true);
  
    console.log(messages);
    try {
      const response = await fetch(`http://localhost:3000/ask`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: prompt })
      });

      const data = await response.json();

      const botResponse: MessageInterface =  {
        message: data.reply,
        timestamp: new Date(),
        direction: 'received'
      }

      setMessages(prevMessages => [...prevMessages, botResponse]);
      setLoading(false);

    } catch(err) {
      console.log(`Something went wrong :( - details - ${err}`);
    }
  }
  return (
    <>
      <div className=''>
       <PromptInput onSentPrompt={sentPropmt}  /> 
      </div>
   </>
  )
}

export default App
