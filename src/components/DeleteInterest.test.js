import React from 'react';
import { shallow } from 'enzyme';
import DeleteInterest from './DeleteInterest';

// replace the async action with a mocked synchronous version to test against
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
    // mock dispatch needs to return a promise for chained calls in component
    const dispatch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<DeleteInterest isTest={true} dispatch={dispatch} key="1" id="1"name="fake" />);
    wrapper.find('.delete-icon').simulate('click');
    // call to dispatch should be to mockDeleteInterest
    expect(dispatch).toHaveBeenCalledWith(mockDeleteInterest);
  });

});