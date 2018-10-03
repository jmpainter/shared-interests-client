import React from 'react';
import { shallow } from 'enzyme';
import { LocationSelect } from './LocationSelect';

const meta = {
  touched: false,
  error: null
}

const htmlInput = {
  name: 'test',
  onChange: function(value) {}
}

describe('<LocationSelect />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LocationSelect meta={meta} input={htmlInput} />);
  });

});