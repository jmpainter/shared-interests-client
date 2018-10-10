import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './UserList.css';

export default function UserList(props) {
  const users = props.list.map(user => {
    const userLink = '/meet-user/' + user.id;
    const milesLabel = user.distance < 2 ? 'mile' : 'miles'; 
    return (
      <li key={user.id}>
        <p><Link to={userLink}>{user.screenName}</Link></p>
        <div className="user-location">
          <p>{user.location}</p>
          <p>{user.distance.toFixed(2)} {milesLabel} away</p>
        </div>
      </li>
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

UserList.defaultProps = {
  list: []
}

UserList.propTypes = {
  list: PropTypes.array
}