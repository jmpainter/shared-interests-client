import React from 'react';
import './Conversations.css';
import { Link } from 'react-router-dom';

export default function Conversations(props) {
  const conversations = props.list.map(conversation => {
    // get other member of conversation
    const otherUser = conversation.users.find(user => user._id !== props.userId);
    const otherUserId = otherUser._id;
    const linkUrl = '/meet-user/' + otherUserId;
    //get last message in each conversation
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    return (
      <li key={ otherUserId } ><Link to={ linkUrl }>{ lastMessage.text } - { otherUser.screenName }</Link></li>
    )
  });
  return (
    <ul>
      { conversations }
    </ul>    
  );
}