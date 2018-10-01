import React from 'react';
import './MessageThread.css';

export default function MessageThread(props) {
  const thread = props.messages.map((message, index) => (
    <div key={ index }>
      <div dangerouslySetInnerHTML={{__html: message.text}} className="message-text" />
      <span className="message-sender">{ message.sender.screenName } - </span>
      <span className="message-date">{ new Date(message.date).toLocaleDateString("en-US")}</span> 
    </div>
  ));
  return (
    <div className="message-thread">
      <h3>Conversation:</h3>
      { thread }
    </div>
  );
}