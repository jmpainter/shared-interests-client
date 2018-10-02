import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './LoginForm.css';

export class LoginForm extends React.Component {

  mySubmit(values) {
    // will use either the actual onSubmit passed in mapDispatchToProps
    // or the version from test
    return this.props.props.onSubmit(values);
  }

  render() {
    if (this.props.authToken) {
      return <Redirect to="/profile" />;
    }
    let errorMessage;
    if(this.props.error) {
      let errorText;
      if(this.props.error.code === 401) {
        errorText = 'Incorrect Login information';
      } else {
        errorText = 'There was a problem with logging in ';
      }
      errorMessage = (
        <div className="form-error" aria-live="polite">
          <p>{errorText}</p>
        </div>
      );
    }
    return (
    <section className="login-form"> 
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Log In</h1>
            <form onSubmit={ this.props.handleSubmit(values => this.mySubmit(values))}>
              { errorMessage }
              <Field
                component={Input}
                type="text"
                name="username"
                id="username"
                label="Username"
                validate={[required, nonEmpty]}
              />
              <Field
                component={Input}
                type="password"
                name="password"
                id="password"
                label="Password"
                validate={[required, nonEmpty]}
              />
              <button disabled={this.props.pristing || this.props.submitting}>
                Log In
              </button>
            </form>
            <div className="example-account">
              <div>
                <p>Example account:</p>
                <p>Username: sam</p>
                <p>Password: password12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    );
  }
}

LoginForm.defaultProps = {
  latitude: 0,
  longitude: 0,
  authToken: null,
};

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => {
      dispatch(login(values.username, values.password));
    }
  }
}

// Here we can override the dispatch onSubmit with an onSubmit function passed
// in for testing
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mergedProps = Object.assign({}, stateProps, { props: dispatchProps }, ownProps);
  // getting warning during test
  delete mergedProps.ref;
  return mergedProps;
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => {
    // There is a possible failed submit with no errors during testing
    if(errors) {
      dispatch(focus('login', Object.keys(errors)[0]))
    }
  }
 })(connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginForm));