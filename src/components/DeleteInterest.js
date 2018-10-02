import React from 'react';
import { deleteInterestAndUpdateUser } from '../actions/intererests';

import './DeleteInterest.css';

export default class DeleteInterest extends React.Component {
  
  deleteInterest() {
    this.props.dispatch(deleteInterestAndUpdateUser(this.props.id));
  }
  render() {
    return (
      <li key={ this.props.id }>{ this.props.name } <button className="delete-interest" onClick={() => this.deleteInterest()}>delete</button></li>
    )  
  }
}