import React from 'react';
import './MessageThread.css';

export default function MessageThread(props) {
  const thread = props.messages.map((message, index) => (
    <div key={ index }>
      <span className="message-sender">{ message.sender.screenName } - </span>
      <span className="message-date">{ new Date(message.date).toLocaleDateString("en-US")}</span> 
      <div dangerouslySetInnerHTML={{__html: message.text}} className="message-text" />
    </div>
  ));
  return (
    <div className="message-thread">
      { thread }
    </div>
  );
}