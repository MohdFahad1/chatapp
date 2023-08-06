import React from 'react';
import Message from './Message';
import messages from './messages.css';

const Messages = () => {
  return (
    <div className="bg-[#ddddf7] scrollable-container">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages