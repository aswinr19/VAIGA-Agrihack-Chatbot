
interface MessageInterface {
  message: string;
  timestamp: Date;
  direction: string;
}

interface MessageListInterface {
  messages: MessageInterface[]
}

const Canvas: React.FC<MessageListInterface> = () => {
  return (
    <div>
      
    </div>
  );
};

export default Canvas;
