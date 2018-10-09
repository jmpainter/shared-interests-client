import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddInterest } from './AddInterest';

// replace the async action with a mocked synchronous version to test against
const mockAddInterest = {
  type: 'ADD_INTEREST'
};

jest.mock('../actions/interests', () => Object.assign({},
  require.requireActual('../actions/interests'),
  {
    addInterest: jest.fn().mockImplementation(() => {
      return mockAddInterest;
  })
  }
));

describe('<AddInterest />', () => {
  
  it('Renders without crashing', () => {
    shallow(<AddInterest />);
  });

  it('Adds the interest', () => {
    // mock dispatch needs to return a promise for chained calls in component
    const dispatch = jest.fn(() => Promise.resolve());
    // autoCompleteData is required for the component to add
    // a interest, so it is injected here
    const autoCompleteData = [{
      title: "Sun",
      pageid: 26751
    }];
    const wrapper = mount(<AddInterest autoCompleteData={autoCompleteData} isTest={true} dispatch={dispatch} />);
    let input = wrapper.find('input').first();
    input.simulate('change', { target: { value: 'Sun' } })
    // call to dispatch should be to mockAddInterest
    expect(dispatch).toHaveBeenCalledWith(mockAddInterest);
  });

});