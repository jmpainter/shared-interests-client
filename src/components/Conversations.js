import React from 'react';
import './Conversations.css';
import { Link } from 'react-router-dom';

export default function Conversations(props) {
  return (
    <div className="conversations">
    <h2>Messages</h2>
      <ul>
        <li><Link to="/conversation">What do you think of gardenias..." rose2</Link></li>
        <li><Link to="/conversation">Going on a ride Sunday..." rider 1</Link></li>
      </ul>    
    </div>
  );
}