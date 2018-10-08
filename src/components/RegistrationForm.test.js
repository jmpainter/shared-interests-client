import RegistrationForm from './RegistrationForm';
import React from 'react';
import sinon from 'sinon';

import { shallow, mount } from 'enzyme'

import { reducer as formReducer } from 'redux-form';
import { authReducer } from '../reducers/auth';
import { miscReducer } from '../reducers/misc';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

describe("RegistrationForm", () => {

  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });

  it('Should submit when the form is completed', () => {
    const onSubmit = jest.fn(() => Promise.resolve());
    // create the simplest redux store possible that will work with Redux-Form.
    const store = createStore(combineReducers({ form: formReducer, auth: authReducer, misc: miscReducer }));
    const props = { onSubmit };

    // mock globals so that the Location input, which uses Google Maps, will be rendered
    class AutocompleteService {
      constructor(){}
    }
    window.google = {
      maps: {places: {
        AutocompleteService: AutocompleteService,
        PlacesServiceStatus: {
          OK: 'ok'
        }
      }}
    }

    const component = mount (
      <Provider store={store}>
        <RegistrationForm props={props}/>
      </Provider>
    );
    component.find('input');

    // the Form, connected to Redux-Form, won't submit unless it's
    // valid. Therefor, all input fields are filled
    let input = component.find('input').at(0);
    input.simulate('change', { target: { value: 'John' } });
    input = component.find('input').at(1);
    input.simulate('change', { target: { value: 'Smith' } });
    input = component.find('input').at(2);
    input.simulate('change', { target: { value: 'jSmith' } });
    input = component.find('input').at(3);
    input.simulate('change', { target: { value: 'San Francisco' } });
    input = component.find('input').at(4);
    input.simulate('change', { target: { value: 'john@gmail.com' } });
    input = component.find('input').at(5);
    input.simulate('change', { target: { value: 'password1234' } });
    input = component.find('input').at(6);
    input.simulate('change', { target: { value: 'password1234' } });

    component.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  }); 
  
});