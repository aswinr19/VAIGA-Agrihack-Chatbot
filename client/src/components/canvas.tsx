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
  return (
    <div>
      { messages.map((message) => {
        <Bubble
            message: message.message,
            timestamp: message.timestamp,
            direction: message.direction
        />
      }) } 
    </div>
  );
};

export default Canvas;
