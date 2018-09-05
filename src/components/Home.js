import React from 'react';
import './Home.css';
import InterestsList from './InterestsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function Home(props) {
  return (
    <div className="home-page">
      <header>
        <h1>Shared Interests</h1>
        <h2>Where you can share your interests and connect with others</h2>
      </header>
      <section>
        <h2>How it works:</h2>
        <ol>
          <li>Create a list of your interests.</li>
          <li>Find other members based on their interests.</li>
          <li>Have a conversation!</li>
        </ol>
      </section>
      <section>
        <h2>Latest on Shared Interests:</h2>
        <InterestsList list={ props.interestsList } />
      </section>   
      <section>
        <Link to="/register"><button className="large-button">Get Started!</button></Link>
      </section>         
    </div>
  );
}

Home.defaultProps = {
  interestsList: null
};

export const mapStateToProps = state => ({
  interestsList: state.latestInterests
});

export default connect(mapStateToProps)(Home);
