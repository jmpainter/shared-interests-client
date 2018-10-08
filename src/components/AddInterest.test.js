import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddInterest } from './AddInterest';

// Mock the async action
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
    const dispatch = jest.fn(() => Promise.resolve());
    // inject autoCompleteData
    const autoCompleteData = [{
      title: "Sun",
      pageid: 26751
    }];
    const wrapper = mount(<AddInterest autoCompleteData={autoCompleteData} isTest={true} dispatch={dispatch} />);
    let input = wrapper.find('input').first();
    input.simulate('change', { target: { value: 'Sun' } })
    // call to dispatch should be to mockAddInterestAndUpdateUser
    expect(dispatch).toHaveBeenCalledWith(mockAddInterest);
  });

});