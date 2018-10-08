import React from 'react';
import { shallow, mount } from 'enzyme';
import { initialState } from '../setupTests';
import { EditInterests } from './EditInterests';

describe('<EditInterests />', () => {
  
  it('Renders without crashing', () => {
    shallow(<EditInterests interests={[]} />);
  });

  it('Renders a list of interests', () => {
    const interestList = initialState.user.user.interests;
    const wrapper =  mount(<EditInterests interests={interestList} />);
    const interests = wrapper.find('li');
    expect(interests.length).toEqual(interestList.length);
    interests.forEach((interest, index) => {
      expect(interest.text()).toEqual(interestList[index].name);
    });
  });
});