import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser, getUserInfo } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import LocationSelect from './LocationSelect';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import './RegistrationForm.css';

const passwordLength = length({ min: 7, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  mySubmit(values) {
    // will use either the actual onSubmit passed in mapDispatchToProps
    // or the version from test
    const { firstName, lastName, screenName, location, username, password } = values;
    const { latitude, longitude } = this.props;
    values = { firstName, lastName, screenName, location, latitude, longitude, username, password };

    return this.props.props.onSubmit(values);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.mySubmit(values))}>
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
          className="wide"
          type="submit"
          disabled={ this.props.pristine || this.props.submitting }>
          Register
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  latitude: state.misc.latitude,
  longitude: state.misc.longitude
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => {
      return dispatch(registerUser(values))
        .then(() => dispatch(login(values.username, values.password)))
        .then(() => dispatch(getUserInfo()));
    }
  }
}

// Here we can override the dispatch onSubmit with an onSubmit function passed
// in for testing
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mergedProps = Object.assign({}, stateProps, { props: dispatchProps }, ownProps);
  delete mergedProps.ref;
  return mergedProps;
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => {
    // There is a possible failed submit with no errors during testing
    if(errors) {
      return dispatch(focus('registration', Object.keys(errors)[0]))
    }
  }
 })(connect(mapStateToProps, mapDispatchToProps, mergeProps)(RegistrationForm));