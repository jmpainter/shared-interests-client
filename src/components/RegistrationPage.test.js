// Project requirements for component testing: 
// Smoke tests,
// Component rendering based on props and state,
// Testing callbacks and events

import React from 'react';
import { shallow, mount } from 'enzyme';
import { RegistrationPage } from './RegistrationPage';

describe('<RegistrationPage />', () => {
  
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<RegistrationPage loggedIn={false} dispatch={dispatch} />);
  });

});
