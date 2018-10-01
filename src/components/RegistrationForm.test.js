import React from 'react';
import { shallow, mount } from 'enzyme';
import initialState from '../setupTests';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import RegistrationForm from './RegistrationForm';

describe('<RegistrationForm />', () => {

  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });

});