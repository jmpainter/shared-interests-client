import React from 'react';
import PropTypes from 'prop-types';
import { deleteInterest } from '../actions/interests';
import { getUserInfo } from '../actions/users';


import './DeleteInterest.css';

export default class DeleteInterest extends React.Component {
  
  deleteInterest(event) {
    if(this.props.isTest || window.confirm(`Are you sure you want to delete ${event.target.nextSibling.data}?`)) {
     debugger;
      return this.props.dispatch(deleteInterest(this.props.id))
        .then(() => this.props.dispatch(getUserInfo()));
    }
  }
  render() {
    return (
      <li key={ this.props.id }><i className="delete-icon far fa-minus-square" onClick={event => this.deleteInterest(event)}></i>{ this.props.name }</li>
    )  
  }
}

DeleteInterest.defaultProps = {
  dispatch: () => {},
  id: '',
  name: ''
}

DeleteInterest.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string
}