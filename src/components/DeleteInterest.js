import React from 'react';
import './DeleteInterest.css';

export default class DeleteInterest extends React.Component {
  render() {
    return (
      <li key={ this.props.id }>{ this.props.name } <button>delete</button></li>
    )  
  }
}