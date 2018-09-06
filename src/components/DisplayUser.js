import React from 'react';
import './DisplayUser.css';
import SendMessage from './SendMessage';

export default function DisplayUser(props) {
  return (
    <div className="display-user">
      <header>
        <h1>Sample User</h1>
      </header>
      <section>
        <h2>Interests:</h2>
        <ul>
          <li>Railroads</li>
          <li>Soccer</li>
          <li>Scotland</li>
        </ul>
      </section>
      <section>
        <SendMessage />
      </section>
    </div>
  )
}