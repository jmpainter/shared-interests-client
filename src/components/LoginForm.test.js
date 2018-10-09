// Project requirements for component testing: 
// Smoke tests,
// Component rendering based on props and state,
// Testing callbacks and events

import LoginForm from './LoginForm';
import React from 'react';
import { shallow, mount } from 'enzyme'
import { reducer as formReducer } from 'redux-form';
import { authReducer } from '../reducers/auth';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

describe("LoginForm", () => {

  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });
  
  it('should dispatch login action when submitted', () => {
    // Mock onSubmit will replace the form's onSubmit function when passed in as a prop
    const onSubmit = jest.fn(() => Promise.resolve());
    // Create the simplest redux store possible that will work with Redux-Form.
    const store = createStore(combineReducers({ form: formReducer, auth: authReducer }));
    const props = { onSubmit }
    const component = mount (
      <Provider store={store}>
        <LoginForm props={props}/>
      </Provider>
    );
  const form = component.find('form')
    // The form, connected to Redux-Form, won't submit unless it's
    // valid, so a username and password are entered here
    let input = component.find('input').first();
    input.simulate('change', { target: { value: 'username@gmail.com' } })
    input = component.find('input').last();
    input.simulate('change', { target: { value: 'password12345' } })
    form.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
  
});