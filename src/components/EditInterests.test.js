import React from 'react';
import { shallow } from 'enzyme';
import { initialState } from '../setupTests';
import { EditInterests } from './EditInterests';

describe('<EditInterests />', () => {
  
  it('Renders without crashing', () => {
    shallow(<EditInterests interests={[]} />);
  });

  it('Renders a list of interests', () => {
    const interests = initialState.user.user.interests;
    const wrapper =  shallow(<EditInterests interests={interests} />);
    expect(wrapper.html()).toEqual('<ul class=\"edit-interests\"><li><i class=\"delete-icon far fa-minus-square\"></i>Mountain Biking </li><li><i class=\"delete-icon far fa-minus-square\"></i>Scuba diving </li><li><i class=\"delete-icon far fa-minus-square\"></i>Jazz </li></ul>');
  });
});