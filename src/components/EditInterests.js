import React from 'react';
import { connect } from 'react-redux';
import './EditInterests.css';
import DeleteInterest from './DeleteInterest';

export class EditInterests extends React.Component {
  render() {
    const editInterests = this.props.interests.map((interest, index) => (
      <DeleteInterest key={ interest._id } dispatch={ this.props.dispatch} id={ interest._id } name={ interest.name } />
    ));
    return (
      <ul className="edit-interests">
        { editInterests }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  interests: state.user.user.interests
})

export default connect(mapStateToProps)(EditInterests);

