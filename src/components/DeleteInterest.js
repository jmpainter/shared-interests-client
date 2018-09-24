import React from 'react';
import { deleteInterest } from '../actions/intererests';

import './DeleteInterest.css';

export default class DeleteInterest extends React.Component {
  deleteInterest() {
    this.props.dispatch(deleteInterest(this.props.id));
  }
  render() {
    return (
      <li key={ this.props.id }>{ this.props.name } <button className="small" onClick={() => this.deleteInterest()}>delete</button></li>
    )  
  }
}