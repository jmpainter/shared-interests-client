import React from 'react';
import { deleteInterestAndUpdateUser } from '../actions/interests';

import './DeleteInterest.css';

export default class DeleteInterest extends React.Component {
  
  deleteInterest(event) {
    if(this.props.isTest || window.confirm(`Are you sure you want to delete ${event.target.nextSibling.data}?`)) {
      this.props.dispatch(deleteInterestAndUpdateUser(this.props.id));
    }
  }
  render() {
    return (
      <li key={ this.props.id }><i className="delete-icon far fa-minus-square" onClick={event => this.deleteInterest(event)}></i>{ this.props.name } </li>
    )  
  }
}