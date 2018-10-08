import React from 'react';
import './MeetUser.css';
import InterestsList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';
import requiresLogin from './RequiresLogin';
import { getOtherUser, putUserInfo, getUserInfo } from '../actions/users';
import { addConversation } from '../actions/conversations';
import { connect } from 'react-redux';

export class MeetUser extends React.Component {

  componentDidMount() {
    this.props.dispatch(getOtherUser(this.props.match.params.id));
  }
  
  startConversation() {
    this.props.dispatch(addConversation(this.props.match.params.id));
  }

  blockUser() {
    if(this.props.isTest || window.confirm('Are you sure you want to block this user?')) {
      const blockedUsers = this.props.user.blockedUsers;
      blockedUsers.push(this.props.match.params.id);
      this.props.history.push('/profile');    
      return this.props.dispatch(putUserInfo({ id: this.props.user.id, blockedUsers }))
        .then(() => this.props.dispatch(getUserInfo()));
    }
  }

  render() {
    // may or may not be a conversation yet!!!
    let currentConversation = null;
    const otherUserId = this.props.match.params.id;
    currentConversation = this.props.conversations.find(conversation => {
      return conversation.users.find(user => user._id === otherUserId)
    });
    
    let conversationInterface;
    if(currentConversation) {
      conversationInterface = (
        <div>
          <MessageThread messages={ currentConversation.messages }/>
          <SendMessage conversationId={ currentConversation._id } />       
          <a className="block-user" onClick={() => this.blockUser()}>Block User</a>
        </div>
      )
    } else {
      conversationInterface = <button className="start-conversation" onClick={() => this.startConversation()}>Start a conversation</button>;
    }
    return (
      <section className="meet-user">
        <div className="container">
          <div className="row">
            <div className="col-4 user-detail-container">
              <div className="user-detail">
                <h1>{ this.props.meetUser.screenName }</h1>
                <p className="user-location">{ this.props.meetUser.location }</p>
                <InterestsList list={ this.props.meetUser.interests }/>
              </div>
            </div>
            <div className="col-8">
              <h2>Conversation:</h2>
              { conversationInterface }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MeetUser.defaultProps = {
  meetUser: { interests:[] },
  conversations: [],
  user: {}
};

const mapStateToProps = state => ({
  conversations: state.conversations.conversations,
  meetUser: state.user.meetUser,
  user: state.user.user
});

export default requiresLogin()(connect(mapStateToProps)(MeetUser));

