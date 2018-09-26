import React from 'react';
import './Profile.css';
import Conversations from './Conversations';
import InterestsList from './InterestsList';
import UserList from './UserList';
import CategoriesInterestsList from './CategoriesInterestsList';
import { getUserInfo, getInterestMatches, getNearbyUsers } from '../actions/users';
import { getConversations } from '../actions/conversations';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from './RequiresLogin';

export class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUserInfo());
    this.props.dispatch(getInterestMatches());
    this.props.dispatch(getConversations());
    this.props.dispatch(getNearbyUsers());
  }
  render() {
    return (
      <section className="profile"> 
        <div className="container profile">
          <div className="row">
            <div className="col-12">
              <img className="face" src={require('../images/head.png')} alt="smiling face" />
              <h1>Profile</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>Conversations</h2>
              <Conversations userId={this.props.userId} list={ this.props.conversations } />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <h3>Matching Interests</h3>
              <CategoriesInterestsList list={ this.props.interestMatches }/>
            </div>
            <div className="col-6">
              <h3>Nearby</h3>
              <UserList list={ this.props.nearbyUsers } />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h3>My Interests</h3>
              <InterestsList list={ this.props.interestsList } />    
              <Link to='/add-edit-interests'>Edit</Link>
            </div>
            <div className="col-6">
              <h3>Other's Interests</h3>
              <CategoriesInterestsList list={ this.props.interestMatches }/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Profile.defaultProps = {
  firstName: 'Josh',
  lastName: 'Painter',
  interestsList: [],
  conversations: [],
  latestInterests: [],
  interestMatches: [],
  nearbyUsers: []
};

export const mapStateToProps = state => ({
  userId: state.user.user.id,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  interestsList: state.user.user.interests,
  conversations: state.conversations.conversations,
  latestInterests: state.survey.latestInterests,
  interestMatches: state.user.interestMatches,
  nearbyUsers: state.user.nearbyUsers
});

export default requiresLogin()(connect(mapStateToProps)(Profile));
