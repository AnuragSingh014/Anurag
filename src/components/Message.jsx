import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Message = () => {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
  return (
    <div className="bg-cover bg-message-bg pacifico-font text-4xl text-blue-800 bg-center h-screen w-screen flex items-center justify-center flex-col">
    
      <TypeAnimation style={{ whiteSpace: 'pre-line', }}
      className={CURSOR_CLASS_NAME}
      cursor={false}
        sequence={[
          `I will be the guy of your dreams the one you have always imagined 😄\n\nYou will get all the love and happiness you deserve from me baby 🙂🙂\n\nI will meet all your expectations baby💖💖\n\nI will keep making efforts throughout my life\n\nI love you 💕💕💕💕!!!!!\n`,
          (el) => el.classList.remove(CURSOR_CLASS_NAME),
        ]}
        speed={50}
        repeat={0}
      />
    </div>
  );
};

export default Message;



// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';

// const Message = () => {
//   return (
//     <div className="bg-cover bg-message-bg pacifico-font text-4xl text-blue-800 bg-center h-screen w-screen flex items-center justify-center flex-col">
      
      
//       <p className='py-1'>I will be the guy of your dreams the one you have always imagined 😄</p>
//       <p className='py-1'>You will get all the love and happiness you deserve from me baby 🙂🙂</p>
//       <p className='py-1'>I will meet all your expectations baby💖💖</p>
//       <p className='py-1'>I will keep making efforts throughout my life</p>
//       <p className='py-1'>I love you 💕💕💕💕!!!!!</p>
      
//     </div>
//   );
// };

// export default Message;
