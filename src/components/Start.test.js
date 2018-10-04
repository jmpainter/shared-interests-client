import React from 'react';
import { shallow } from 'enzyme';

import { Start } from './Start';

describe('<Start />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Start dispatch={dispatch} />);
  });
});
