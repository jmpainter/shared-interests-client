import React from 'react';
import './AddEditInterests.css';
import EditInterests from './EditInterests';
import AddInterest from './AddInterest';
import { connect } from 'react-redux';

export function AddEditInterests(props) {
  return (
    <div className="add-edit-interests">
      <header>
        <h1>My Interests</h1>
      </header>
      <section>
        <EditInterests list={ props.interests } />
        <AddInterest />
      </section>
    </div>
  );
}

AddEditInterests.defaultProps = {
  interests: []
}

const mapStateToProps = state => ({
  interests: state.user.interests
});

export default connect(mapStateToProps)(AddEditInterests);