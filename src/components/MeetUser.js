import React from 'react';
import './MeetUser.css';
import InterestList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';
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
    console.log('block user');
    const blockedUsers = this.props.user.blockedUsers;
    blockedUsers.push(this.props.match.params.id);
    this.props.dispatch(putUserInfo({ id: this.props.user.id, blockedUsers }))
      .then(() => this.props.dispatch(getUserInfo()));
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
                <a className="block-user" onClick={() => this.blockUser()}>Block User</a>
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
  user: {}
};

const mapStateToProps = state => ({
  conversations: state.conversations.conversations,
  meetUser: state.user.meetUser,
  user: state.user.user
});

export default connect(mapStateToProps)(MeetUser);

