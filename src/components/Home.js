import React from 'react';
import './Home.css';
import LatestInterests from './LatestInterests';
import { Link } from 'react-router-dom';

export default function Home(props) {
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
        <LatestInterests />
      </section>   
      <section>
        <Link to="/register"><button class="large-button">Get Started!</button></Link>
      </section>         
    </div>
  );
}