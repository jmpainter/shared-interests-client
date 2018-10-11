import React from 'react';
import PropTypes from 'prop-types';
import './Conversations.css';
import { Link } from 'react-router-dom';
import stripTags from 'striptags';

export default function Conversations(props) {

  if(props.list.length > 0) {
    const conversations = props.list.map(conversation => {
      // get other member of conversation
      const otherUser = conversation.users.find(user => user._id !== props.user.id);
      const otherUserId = otherUser._id;
      const linkUrl = '/meet-user/' + otherUserId;
      //get last message in each conversation
      if(conversation.messages.length > 0) {
        const lastMessage = conversation.messages[conversation.messages.length - 1];
        return (
          <li key={ otherUserId } >
            <Link to={ linkUrl }>
              <p>Conversation with { otherUser.screenName }:</p>
              <p className="lastMessage">{ stripTags(lastMessage.text) } - { lastMessage.sender.screenName }</p>
            </Link>
          </li>
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
  } else {
    return (
      <p>None Yet</p>
    )
  }

}

Conversations.defaultProps = {
  list: [],
  user: {}
}

Conversations.propTypes = {
  list: PropTypes.array,
  user: PropTypes.object
}