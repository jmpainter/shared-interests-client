import React from 'react';
import { shallow, mount } from 'enzyme';
import { addInterestAndUpdateUser } from '../actions/intererests';

import { AddInterest } from './AddInterest';

// Mock the async fetchBoard action
// const mockAddInterestAndUpdateUser = {
//   type: 'ADD_INTEREST_AND_UPDATE_USER'
// };

// jest.mock('../actions', () => Object.assign({},
//   require.requireActual('../actions'),
//   {
//     addInterestAndUpdateUser: jest.fn().mockImplementation(() => {
//         return mockFetchBoardAction;
//     })
//   }
// ));

describe('<AddInterest />', () => {
  
  it('Renders without crashing', () => {
    shallow(<AddInterest />);
  });

  it('Adds the interest', () => {
    const dispatch = jest.fn();
    // inject autoCompleteData
    const autoCompleteData = [{
      title: "Sun",
      pageid: 26751
    }];
    const wrapper = mount(<AddInterest autoCompleteData={autoCompleteData} isTest={true} dispatch={dispatch} />);
    let input = wrapper.find('input').first();
    input.simulate('change', { target: { value: 'Sun' } })
    // call to dispatch should be to addInterestAndUpdateUser
    expect(dispatch.mock.calls[0][0].toString()).toEqual(addInterestAndUpdateUser(dispatch).toString());
  });

});