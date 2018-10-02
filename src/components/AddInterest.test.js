import React from 'react';
import { shallow, mount } from 'enzyme';
import { addInterestAndUpdateUser } from '../actions/intererests';

import { AddInterest } from './AddInterest';

describe('<AddInterest />', () => {
  
  it('Renders without crashing', () => {
    shallow(<AddInterest />);
  });

  // it('Renders the interest to be deleted', () => {
  //   const wrapper = shallow(<DeleteInterest key="1" id="1"name=aa"fake" />);
  //   expect(wrapper.html()).toEqual('<li>fake <button class=\"delete-interest\">delete</button></li>');
  // });

  it('Adds the interest', () => {
    const dispatch = jest.fn();
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