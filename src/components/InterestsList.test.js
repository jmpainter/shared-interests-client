// project requirements for component testing: 
// smoke tests,
// component rendering based on props and state,
// testing callbacks and events

import React from 'react';
import { shallow } from 'enzyme';

import InterestsList from './InterestsList';
import { initialState } from '../setupTests';

describe('<InterestsList />', () => {
  
  it('Renders without crashing', () => {
    shallow(<InterestsList list={[]} />);
  });

  it('Renders a list of interests', () => {
    const interestList = initialState.user.user.interests;
    const wrapper = shallow(<InterestsList list={interestList} />);
    const interests = wrapper.find('li');
    interests.forEach((interest, index) => {
      expect(interest.text()).toEqual(interestList[index].name)
    });
  });

});