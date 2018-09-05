import React from 'react';
import './Conversations.css';
import { Link } from 'react-router-dom';

export default function Conversations(props) {
  const conversations = props.list.map(conversation => {
    const linkUrl = '/conversation/' + conversation.id;
    //get last message in each conversation
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    return (
      <li key={ conversation.id } ><Link to={ linkUrl }>{ lastMessage.content } { lastMessage.screenName }</Link></li>
    )
  });
  return (
    <ul>
      { conversations }
    </ul>    
  );
}