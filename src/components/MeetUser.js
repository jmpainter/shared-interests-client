import React from 'react';
import './MeetUser.css';
import InterestList from './InterestsList';
import MessageThread from './MessageThread';
import SendMessage from './SendMessage';
import { getConversations } from '../actions/conversations';
import { getOtherUser } from '../actions/users';
import { connect } from 'react-redux';


export class MeetUser extends React.Component {

  componentDidMount() {
    this.props.dispatch(getOtherUser(this.props.match.params.id));
    this.props.dispatch(getConversations());
  }
  render() {
    // may or may not be a conversation yet!!!
    // const conversation = this.props.conversations.find(conversation => conversation.id === conversationId);
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
              <MessageThread messages={ this.props.conversations.messages }/>
              <SendMessage />
            </div>
          </div>
        </div>
      </section>  
    );
  }
}
  
MeetUser.defaultProps = {
  meetUser: {},
  conversations: {}
};

const mapStateToProps = state => ({
  conversations: state.conversations.conversations,
  meetUser: state.user.meetUser
});

export default connect(mapStateToProps)(MeetUser);

