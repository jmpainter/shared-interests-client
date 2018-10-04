import React from 'react';
import { shallow } from 'enzyme';
import { deleteInterestAndUpdateUser } from '../actions/interests';

import DeleteInterest from './DeleteInterest';

// Mock the async action
const mockDeleteInterestAndUpdateUser = {
  type: 'DELETE_INTEREST_AND_UPDATE_USER'
};

jest.mock('../actions/interests', () => Object.assign({},
  require.requireActual('../actions/interests'),
  {
    deleteInterestAndUpdateUser: jest.fn().mockImplementation(() => {
        return mockDeleteInterestAndUpdateUser;
    })
  }
));

describe('<DeleteInterest />', () => {
  
  it('Renders without crashing', () => {
    shallow(<DeleteInterest key="1" id="1"name="fake" />);
  });

  it('Renders the interest to be deleted', () => {
    const wrapper = shallow(<DeleteInterest key="1" id="1"name="fake" />);
    expect(wrapper.html()).toEqual('<li><i class=\"delete-icon far fa-minus-square\"></i>fake </li>');
  });

  it('Deletes the interest', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<DeleteInterest isTest={true} dispatch={dispatch} key="1" id="1"name="fake" />);
    wrapper.find('.delete-icon').simulate('click');
    // check that the first call to dispatch is for the mock action
    expect(dispatch).toHaveBeenCalledWith(mockDeleteInterestAndUpdateUser);
  });

});