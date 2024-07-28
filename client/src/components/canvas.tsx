import Bubble from './bubble';

interface MessageInterface {
  message: string;
  timestamp: Date;
  direction: string;
}

interface MessageListInterface {
  messages: MessageInterface[]
}

const Canvas: React.FC<MessageListInterface> = ({ messages }) => {
  console.log(messages); 
  return (
    <div>
    </div>
  );
};

export default Canvas;
