import React from 'react';
import './CategoriesInterestsList.css';
import { Link } from 'react-router-dom';

export default function CategoriesInterestsList(props) {
  const categoriesInterests = props.list.map(interest => {
    const users = interest.users.map(user => {
      const userLink = '/display-user/' + user.id;
      return (
        <li key={ 'u' + user.id } ><Link to={ userLink } >{ user.screenName }</Link></li>
      )
    });
    return (
      <div key={ 'd' + interest.id } >
        <li key={ 'i' + interest.id } className="interest">{ interest.name }</li>
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