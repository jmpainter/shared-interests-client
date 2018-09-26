import React from 'react';
import './MessageThread.css';

export default function MessageThread(props) {
  debugger;
  const thread = props.messages.map((message, index) => (
    <p key={ index }>{ new Date(message.date).toLocaleDateString("en-US")} { message.sender.screenName }: { message.text }</p>
  ));
  return (
    <div className="message-thread">
      { thread }
    </div>
  );
}

MessageThread.defaultProps = {
  messages: []
}