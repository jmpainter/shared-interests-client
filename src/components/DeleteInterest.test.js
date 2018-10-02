import React from 'react';
import { shallow } from 'enzyme';
import { deleteInterestAndUpdateUser } from '../actions/intererests';

import DeleteInterest from './DeleteInterest';

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
    // check that the first call to dispatch is for the correct action
    expect(dispatch.mock.calls[0][0].toString()).toEqual(deleteInterestAndUpdateUser(dispatch).toString());
  });

});