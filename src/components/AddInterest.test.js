import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddInterest } from './AddInterest';

describe('<AddInterest />', () => {
  
  it('Renders without crashing', () => {
    // must send required props
    const mock = jest.fn();
    shallow(<AddInterest 
      onSuggestionsFetchRequested={mock} 
      onSuggestionsClearRequested={mock} />);
  });

});