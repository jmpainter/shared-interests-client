// Project requirements for component testing: 
// Smoke tests,
// Component rendering based on props and state,
// Testing callbacks and events

import React from 'react';
import { shallow } from 'enzyme';

import { Start } from './Start';

describe('<Start />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Start dispatch={dispatch} />);
  });
});
