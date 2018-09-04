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
        <Conversations />
      </section>    
    
      <section>
        <h2>Matching Interests</h2>
        <CategoriesInterestsList />
      </section>

      <section>
        <h2>My Interests</h2>
        <InterestsList />
        <Link to="/add-edit-interests">Edit Interests</Link>
      </section>

      <section>
        <h2>Others' Interests</h2>
        <CategoriesInterestsList />
      </section>    
    </div>
  );
}

Dashboard.defaultProps = {
  firstName: 'Josh',
  lastName: 'Painter'
};

export const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName
});

export default connect(mapStateToProps)(Dashboard);
