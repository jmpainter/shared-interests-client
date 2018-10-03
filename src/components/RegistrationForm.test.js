import RegistrationForm from './RegistrationForm';
import React from 'react';
import { shallow } from 'enzyme'

describe("RegistrationForm", () => {

  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });
  
});