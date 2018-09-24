import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './LoginForm.css';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    if (this.props.authToken) {
      return <Redirect to="/profile" />;
    }
    let error;
    if(this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          { this.props.error }
        </div>
      );
    }
    return (
    <section className="login-form"> 
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Log In</h1>
            <form onSubmit={ this.props.handleSubmit(values => this.onSubmit(values))}>
              { error }
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
  authToken: null
};

const mapStateToProps = state => ({
  authToken: state.auth.authToken
});

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', Object.keys(errors)[0]))
 })(connect(mapStateToProps)(LoginForm));