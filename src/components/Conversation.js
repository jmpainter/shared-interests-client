import React from 'react';
import './Conversation.css';
import InterestList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';
import { connect } from 'react-redux';

export class Conversation extends React.Component {
  render() {
    const conversationId = parseInt(this.props.match.params.id, 10);
    const conversation = this.props.conversations.find(conversation => conversation.id === conversationId);
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="user-detail">
                <h2 className="user-name">{ conversation.user.screenName }</h2>
                <p>{ conversation.user.location }</p>
                <InterestList list={ conversation.user.interests }/>
              </div>
            </div>
            <div className="col-8"> 
              <MessageThread messages={ conversation.messages }/>
              <SendMessage />
            </div>
          </div>
        </div>
      </section>  
    );
  }
}
  
Conversation.defaultProps = {
  conversations: []
};

const mapStateToProps = state => ({
  conversations: state.conversations
});

export default connect(mapStateToProps)(Conversation);

