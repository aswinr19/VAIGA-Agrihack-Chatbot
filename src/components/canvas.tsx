import Bubble from './bubble';

const Canvas = ({ messages }) => {
  
  return (
    <div>
       <Bubble 
          message='hello wolrd'
          timestamp='8.00pm'
          direction='sent'
          />
        <Bubble 
          message='hello'
          timestamp='8.00pm'
          direction='received'
          />
    </div>
  );
};

export default Canvas;
