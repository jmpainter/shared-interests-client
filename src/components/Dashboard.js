import React from 'react';
import './Dashboard.css';

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
      </header>

      <section>
        <h2>Messages</h2>
        <ul>
          <li><a href="conversation.html">What do you think of gardenias..." rose2</a></li>
          <li><a href="conversation.html">Going on a ride Sunday..." rider 1</a></li>
        </ul>
      </section>    
    
      <section>
        <h2>Matching Interests</h2>
        <ul>
          <li><a href="user-detail.html">Mountain Biking: biker1, Santa Cruz, CA</a></li>
          <li><a href="user-detail.html">Mountain Biking: sunny, Boulder, CA</a></li>
          <li><a href="user-detail.html">Gardening: rose, San Francisco, CA</a></li>
        </ul>
      </section>

      <section>
        <h2>My Interests</h2>
        <ul>
          <li>Moutain Biking</li>
          <li>Cross Country Skiing</li>
          <li>Gardening</li>
        </ul>
        <a href="add-interests.html">Edit</a>
      </section>

      <section>
        <h2>Other's Interests</h2>
        <ul>
          <li>Knitting</li>
          <li><a href="user-detail.html">sknit, Tahoe, CA</a></li>
          <li><a href="user-detail.html">rrenolds, VT</a></li>
          <li>Football</li>
          <li><a href="user-detail.html">Barry, NY</a></li>
          <li>Tennis</li>
          <li><a href="user-detail.html">Sue, Los Angeles, CA</a></li>
          <li><a href="user-detail.html">footBallLvr, Philadelphia, PA</a></li>
        </ul>
      </section>    
    </div>
  );
}