import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import LocationSelect from './LocationSelect';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import './RegistrationForm.css';

const passwordLength = length({ min: 7, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { firstName, lastName, screenName, location, username, password } = values;
    const { latitude, longitude } = this.props;
    const user = { firstName, lastName, screenName, location, latitude, longitude, username, password };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field component={Input} type="text" name="firstName" label="First Name" />
        <Field component={Input} type="text" name="lastName" label="Last Name" />
        <Field component={Input} type="text" name="screenName" label="Screen Name (public)" />
        <Field component={LocationSelect} name="location" label="Location" />
        <Field component={Input} type="text" name="username" label="Username (for login)" />
        <Field 
          component={Input} 
          type="password" 
          name="password"
          label="Password"
          validate={[required, passwordLength, isTrimmed]}
          />
        <Field 
          component={Input} 
          type="password" 
          name="passwordConform"
          label="Confirm Password"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={ this.props.pristine || this.props.submitting }>
          Register
        </button>
      </form>
    );
  }
}

RegistrationForm.defaultProps = {
  latitude: 0,
  longitude: 0
};

const mapStateToProps = state => ({
  latitude: state.misc.latitude,
  longitude: state.misc.longitude
});

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
 })(connect(mapStateToProps)(RegistrationForm));