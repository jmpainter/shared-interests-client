import React from 'react';
import './Dashboard.css';
import Conversations from './Conversations';
import InterestsList from './InterestsList';
import CategoriesInterestsList from './CategoriesInterestsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function Dashboard(props) {
  return (
    <div className="dashboard">
      <header>
        <h1>{ props.firstName + ' ' + props.lastName }</h1>
      </header>

      <section>
        <h2>Conversations</h2>
        <Conversations list={ props.conversations } />
      </section>    
    
      <section>
        <h2>Matching Interests</h2>
        <CategoriesInterestsList list={ props.interestMatches }/>
      </section>

      <section>
        <h2>My Interests</h2>
        <InterestsList list={ props.interestsList } />
        <Link to="/add-edit-interests">Edit Interests</Link>
      </section>

      <section>
        <h2>Others' Interests</h2>
        <CategoriesInterestsList list={ props.latestInterests } />
      </section>    
    </div>
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
  conversations: state.user.conversations,
  latestInterests: state.latestInterests,
  interestMatches: state.interestMatches
});

export default connect(mapStateToProps)(Dashboard);
