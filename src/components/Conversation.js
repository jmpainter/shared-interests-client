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
      <div className="conversation">
        <section className="section-background user-detail">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blurb">
                  <h2 className="user-name">{ conversation.user.screenName }</h2>
                  <p>{ conversation.user.location }</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h2>Interests:</h2>
                <InterestList list={ conversation.user.interests }/>
              </div>
              <div className="col-8"> 
                <MessageThread messages={ conversation.messages }/>
                <SendMessage />
              </div>
            </div>
          </div>
        </section>      
      </div>
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

