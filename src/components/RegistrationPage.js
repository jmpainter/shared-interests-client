import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's profile
    if(props.loggedIn) {
      return <Redirect to="/profile" />;
    }
    return (
      <section className="registration-form">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>Sign Up</h1>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>
    )
}

RegistrationPage.defaultProps = {
  loggedIn: false
};

const mapStatetoProps = state => ({
  loggedIn: state.auth.authToken !== null
});

export default connect(mapStatetoProps)(RegistrationPage);