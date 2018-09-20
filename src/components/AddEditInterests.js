import React from 'react';
import './AddEditInterests.css';
import EditInterests from './EditInterests';
import AddInterest from './AddInterest';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function AddEditInterests(props) {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1>My Interests</h1>
              <EditInterests list={ props.interests } />
              <AddInterest />
              <Link to="/dashboard">(Not implemented yet) Click to continue</Link>
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