import React from 'react';
import { Link } from 'react-router-dom';

export default function UserList(props) {
  const users = props.list.map(user => {
    const userLink = '/meet-user/' + user.id;
    const milesLabel = user.distance < 2 ? 'mile' : 'miles'; 
    return (
    <li key={user.id}><Link to={userLink}>{user.screenName} - {user.location} {user.distance.toFixed(2)} {milesLabel} away</Link></li>
    )
  });
  return (
    <div className="user-list">
      <ul>
        {users}
      </ul>
    </div>
  )
}