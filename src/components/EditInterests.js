import React from 'react';
import { connect } from 'react-redux';
import './EditInterests.js';
import DeleteInterest from './DeleteInterest';

export class EditInterests extends React.Component {
  render() {
    const editInterests = this.props.interests.map((interest, index) => (
      <DeleteInterest dispatch={ this.props.dispatch} key={ index } id={ interest._id } name={ interest.name } />
    ));
    return (
      <ul className="edit-interests">
        { editInterests }
      </ul>
    );
  }
}

EditInterests.defaultProps = {
  interests: []
}

const mapStateToProps = state => ({
  interests: state.user.user.interests
})

export default connect(mapStateToProps)(EditInterests);

