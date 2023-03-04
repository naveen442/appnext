import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const index = () => {
    const showChatbotPopup = () => {
        if (typeof window !== 'undefined' && window.wacto) {
          window.wacto.open();
        }
      };
    const [isBrowser, setIsBrowser] = useState(false);
   
      useEffect(() => {
        setIsBrowser(true);
      }, []);
      useEffect(() => {
        if (isBrowser) {
          const script = document.createElement('script');
          script.async = true;
          script.defer = true;
          script.type = 'text/javascript';
          script.src = 'https://app.wacto.in/static/js/widget.js?config=' + encodeURIComponent(JSON.stringify({
            bot_key: '26493f2dc1864025',
            welcome_msg: true,
            branding_key: 'wacto',
            server: 'https://app.wacto.in',
            e: 'p'
          }));
          document.head.appendChild(script);
    
          // Define a function to show the chatbot widget as a popup
         
        }
      }, [isBrowser]);
  return (
    <>
         {isBrowser &&
    <li className="">
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
      <a onClick={() => showChatbotPopup()}>Chat with us</a>
    </li>
  }
     
    </>
  )
}

export default index
