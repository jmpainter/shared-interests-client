import React from 'react';
import { shallow } from 'enzyme';

import InterestsList from './InterestsList';
import { initialState } from '../setupTests';

describe('<InterestsList />', () => {
  
  it('Renders without crashing', () => {
    shallow(<InterestsList list={[]} />);
  });

  it('Renders a list of interests', () => {
    const interests = initialState.user.user.interests;
    const wrapper = shallow(<InterestsList list={interests} />);
    expect(wrapper.html()).toEqual('<ul><li>Mountain Biking</li><li>Scuba diving</li><li>Jazz</li></ul>');
  });

});