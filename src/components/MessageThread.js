import React from 'react';
import './MessageThread.css';

export default function MessageThread(props) {
  const thread = props.messages.map((message, index) => (
    <p key={ index }>{ message.date} { message.screenName }: { message.content }</p>
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