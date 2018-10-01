import LoginForm from './LoginForm';
import React from 'react';
import sinon from 'sinon';

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
  const onSubmit = sinon.stub().returns(Promise.resolve());
  // create the simplest redux store possible that will work with Redux-Form.
  const store = createStore(combineReducers({ form: formReducer, auth: authReducer }));
    const props = { onSubmit }
  const component = mount (
    <Provider store={store}>
      <LoginForm props={props}/>
    </Provider>
  );
  const form = component.find('form')
    // the Form, connected to Redux-Form, won't submit unless it's
    // valid. Thus, a username and password are entered here
  let input = component.find('input').first();
    input.simulate('change', { target: { value: 'username@gmail.com' } })
    input = component.find('input').last();
    input.simulate('change', { target: { value: 'password12345' } })
  form.simulate('submit');
  expect(onSubmit.callCount).toEqual(1);
  })
});