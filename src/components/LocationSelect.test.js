// Project requirements for component testing: 
// Smoke tests,
// Component rendering based on props and state,
// Testing callbacks and events

import React from 'react';
import { shallow } from 'enzyme';
import { LocationSelect } from './LocationSelect';

describe('<LocationSelect />', () => {
  
  // Callback and event test are not included because this component
  // uses the Google Maps api, which can only be loaded from a remote CDN.
  // Therefore, it can not be included locally for use in tests.
  
  it('Renders without crashing', () => {
    // mock props so that the component will render
    const meta = {
      touched: false,
      error: null
    }
    const htmlInput = {
      name: 'test',
      onChange: function(value) {}
    }
    
    shallow(<LocationSelect meta={meta} input={htmlInput} />);
  });

});