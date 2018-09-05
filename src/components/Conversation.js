import React from 'react';
import './Conversation.css';
import InterestList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';
import { connect } from 'react-redux';

export class Conversation extends React.Component {
  render() {
    const conversation = this.props.conversations.find(conversation => conversation.id === parseInt(this.props.match.params.id, 10));
    return (
      <div className="conversation">
      <header>
        <h1>Conversation</h1>
      </header>
      
      <section>
        <h2 className="user-name">{ conversation.user.screenName }</h2>
        <p>{ conversation.user.location }</p>
        <p>Interests:</p>
        <InterestList list={ conversation.user.interests }/>
      </section>
      
      <section>
        <MessageThread messages={ conversation.messages }/>
      </section>
      
      <section>
        <h2>Reply:</h2>
        <SendMessage />
      </section>
      
      <section>
        <button>Delete this conversation</button>
        <button>Block This Person</button>
      </section>
      </div>
    );
  }
}
  
Conversation.defaultProps = {
  conversations: []
};

const mapStateToProps = state => ({
  conversations: state.user.conversations
});

export default connect(mapStateToProps)(Conversation);

