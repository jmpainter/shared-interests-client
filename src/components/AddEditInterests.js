import React from 'react';
import './AddEditInterests.css';
import EditInterests from './EditInterests';
import AddInterest from './AddInterest';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function AddEditInterests(props) {
  return (
    <section className="add-edit-interests"> 
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>My Interests</h1>
              <EditInterests list={ props.interests } />
              <p>New Interest:</p>
              <AddInterest />
              <button>Done</button>
          </div>
        </div>
      </div>
    </section>
  );
}

AddEditInterests.defaultProps = {
  interests: []
}

const mapStateToProps = state => ({
  interests: state.user.interests
});

export default connect(mapStateToProps)(AddEditInterests);