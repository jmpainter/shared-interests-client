import React from 'react';
import './MeetUser.css';
import InterestList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';
import { getOtherUser } from '../actions/users';
import { addConversation, getConversations, setCurrentConversation } from '../actions/conversations';
import { connect } from 'react-redux';


export class MeetUser extends React.Component {

  componentDidMount() {
    this.props.dispatch(getOtherUser(this.props.match.params.id));
  }
  
  startConversation() {
    this.props.dispatch(addConversation(this.props.match.params.id));
    console.log('start conversation');
  }
  render() {
    // may or may not be a conversation yet!!!
    let currentConversation = null;
    const otherUserId = this.props.match.params.id;
    currentConversation = this.props.conversations.find(conversation => {
      return conversation.users.find(user => user._id === otherUserId)
    });
    
    debugger;
    let conversationInterface;
    if(currentConversation) {
      conversationInterface = (
        <div>
          <MessageThread messages={ currentConversation.messages }/>
          <SendMessage conversationId={ currentConversation._id } />       
        </div>
      )
    } else {
      conversationInterface = <button onClick={() => this.startConversation()}>Start a conversation</button>;
    }
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="user-detail">
                <h2 className="user-name">{ this.props.meetUser.screenName }</h2>
                <p>{ this.props.meetUser.location }</p>
                <InterestList list={ this.props.meetUser.interests }/>
              </div>
            </div>
            <div className="col-8">
              { conversationInterface }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
  
MeetUser.defaultProps = {
  meetUser: {},
  conversations: [],
};

const mapStateToProps = state => ({
  conversations: state.conversations.conversations,
  meetUser: state.user.meetUser
});

export default connect(mapStateToProps)(MeetUser);

