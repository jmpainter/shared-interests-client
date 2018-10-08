import React from 'react';
import { shallow } from 'enzyme';
import DeleteInterest from './DeleteInterest';

// Mock the async action
// const mockDeleteInterest = () => Promise.resolve();

// Mock the async action
const mockDeleteInterest = {
  type: 'DELETE_INTEREST'
};

jest.mock('../actions/interests', () => Object.assign({},
  require.requireActual('../actions/interests'),
  {
    deleteInterest: jest.fn().mockImplementation(() => {
        return mockDeleteInterest;
    })
  }
));

describe('<DeleteInterest />', () => {
  
  it('Renders without crashing', () => {
    shallow(<DeleteInterest key="1" id="1"name="fake" />);
  });

  it('Renders the interest to be deleted', () => {
    const wrapper = shallow(<DeleteInterest key="1" id="1"name="fake" />);
    expect(wrapper.text()).toEqual('fake');
  });

  it('Deletes the interest', () => {
    const dispatch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<DeleteInterest isTest={true} dispatch={dispatch} key="1" id="1"name="fake" />);
    debugger;
    wrapper.find('.delete-icon').simulate('click');
    // check that the first call to dispatch is for the mock action
    expect(dispatch).toHaveBeenCalledWith(mockDeleteInterest);
  });

});