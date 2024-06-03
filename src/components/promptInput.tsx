import { useState } from 'react';
import sentIcon from '../assets/sent.png';

interface FormElements extends HTMLFormControlsCollection {
      promptInput: HTMLInputElement
  }

  interface PromptFormElement extends HTMLFormElement {
      readonly elements: FormElements
  }

interface UserInputProps {
  onSentPrompt: (message: string) => void;
}

const PromptInput: React.FC<UserInputProps> = ({ onSentPrompt }) => {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<PromptFormElement> ) => {
    event.preventDefault();
   
    onSentPrompt(prompt);
    console.log('submitted prompt');
    console.log(prompt);
    
    setPrompt('');
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  return (
    <div >
       <form onSubmit={handleSubmit}>
          <input
            className='border m-2 p-2 rounded-2xl w-96'
            type='text' 
            id='prompt' 
            value={prompt}
            onChange={handlePromptChange}
         />
          <button className='rounded-3xl'> 
            <img 
             src={sentIcon} 
             alt="submit prompt" 
             width={20} 
             height={20}
            />   
          </button>
      </form>
    </div>
  );
}

export default PromptInput;
