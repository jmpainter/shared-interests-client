import React from 'react';
import './Dashboard.css';
import Conversations from './Conversations';
import InterestsList from './InterestsList';
import CategoriesInterestsList from './CategoriesInterestsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function Dashboard(props) {
  return (

    <section>
      <div className="container profile">
        <div className="row">
          <div className="col-12">
            <img className="face" src="images/head.png" alt="smiling face" />
            <h1>Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2>Conversations</h2>
            <Conversations list={ props.conversations } />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3>Matching Interests</h3>
            <CategoriesInterestsList list={ props.interestMatches }/>
          </div>
          <div className="col-6">
            <h3>Nearby</h3>
            <ul>
              <li><a href="user-detail.html">Stan53 - Greenbrae, CA</a></li>
              <li><a href="user-detail.html">Randy4 - San Francisco, CA</a></li>
              <li><a href="user-detail.html">Stargazer - Oakand, CA</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>My Interests</h3>
            <InterestsList list={ props.interestsList } />    
            <Link to='/add-edit-interests'>Edit</Link>
          </div>
          <div className="col-6">
            <h3>Other's Interests</h3>
            <CategoriesInterestsList list={ props.interestMatches }/>
          </div>
        </div>
      </div>
    </section>
  );
}

Dashboard.defaultProps = {
  firstName: 'Josh',
  lastName: 'Painter',
  interestsList: [],
  conversations: [],
  latestInterests: [],
  interestMatches: []
};

export const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  interestsList: state.user.interests,
  conversations: state.conversations,
  latestInterests: state.survey.latestInterests,
  interestMatches: state.user.interestMatches
});

export default connect(mapStateToProps)(Dashboard);
