enum Direction {
  Sent = 'sent',
  Received = 'received'
}

interface MessageInterface {
  message: string;
  timestamp: string;
  direction: Direction;
}

const ChatBubble: React.FC<MessageInterface> = ({ message, timestamp, direction }) => {
 const condition: boolean = direction! === 'sent'; 

  return (
    <>
    { condition ? (
      <div 
          className='flex my-4 pt-2 pb-2 pl-2 pr-4 rounded-b-xl rounded-tl-xl bg-lime-400'>
        <span> 
            { message } 
          </span> 
          <span 
            className='text-xs text-slate-600 items-center ml-auto mt-4'
          > 
            { timestamp } 
          </span> 
        </div>
    ): (
      <div 
            className='flex my-4 pt-2 pb-2 pl-2 pr-4 rounded-b-xl rounded-tr-xl bg-slate-100'>
        <span> 
              { message } 
            </span> 
            <span 
              className='text-xs text-slate-600 items-center ml-auto mt-4'> 
              { timestamp } 
            </span> 
          </div>
    ) }
    </>
  )
};

export  default ChatBubble;
