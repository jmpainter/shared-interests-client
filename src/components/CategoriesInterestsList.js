import React from 'react';
import PropTypes from 'prop-types';
import './CategoriesInterestsList.css';
import { Link } from 'react-router-dom';

export default function CategoriesInterestsList(props) {
  const categoriesInterests = props.list.map((interest, index) => {
    const users = interest.users.map(user => {
      const userLink = '/meet-user/' + user._id;
      return (
        <li key={ 'u' + user.id } ><Link to={ userLink } >{ user.screenName } - { user.location}</Link></li>
      )
    });
    return (
      <div key={ 'd' + index } >
        <li key={ 'i' + index} className="interest">{ interest.interest }</li>
        <ul>
          { users }
        </ul>
      </div>
    )
  });

  return (
    <ul className="categoriesInterests">
      { categoriesInterests }
    </ul>
  );
}

CategoriesInterestsList.defaultProps = {
  list: []
}

CategoriesInterestsList.propTypes = {
  list: PropTypes.array
}