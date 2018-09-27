import React from 'react';
import { deleteInterest } from '../actions/intererests';
import { getUserInfo } from '../actions/users';

import './DeleteInterest.css';

export default class DeleteInterest extends React.Component {
  deleteInterest() {
    this.props.dispatch(deleteInterest(this.props.id))
      .then(this.props.dispatch(getUserInfo()));
  }
  render() {
    return (
      <li key={ this.props.id }>{ this.props.name } <button className="small" onClick={() => this.deleteInterest()}>delete</button></li>
    )  
  }
}