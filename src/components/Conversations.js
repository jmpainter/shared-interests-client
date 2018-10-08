import React from 'react';
import PropTypes from 'prop-types';
import './Conversations.css';
import { Link } from 'react-router-dom';
import stripTags from 'striptags';

export default function Conversations(props) {
  const conversations = props.list.map(conversation => {
    // get other member of conversation
    const otherUser = conversation.users.find(user => user._id !== props.user.id);
    const otherUserId = otherUser._id;
    const linkUrl = '/meet-user/' + otherUserId;
    //get last message in each conversation
    let lastMessageText = '';
    if(conversation.messages.length > 0) {
      lastMessageText = conversation.messages[conversation.messages.length - 1].text + ' -';
      lastMessageText = stripTags(lastMessageText);
      return (
        <li key={ otherUserId } ><Link to={ linkUrl }>{ lastMessageText } { otherUser.screenName }</Link></li>
      )
    } else {
      return null;
    }
  });
  return (
    <ul>
      { conversations }
    </ul>    
  );
}

Conversations.defaultProps = {
  list: [],
  user: {}
}

Conversations.propTypes = {
  list: PropTypes.array,
  user: PropTypes.object
}