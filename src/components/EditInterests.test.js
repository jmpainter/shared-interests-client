import React from 'react';
import { shallow } from 'enzyme';
import { initialState } from '../setupTests';
import { EditInterests } from './EditInterests';

describe('<EditInterests />', () => {
  
  it('Renders without crashing', () => {
    shallow(<EditInterests interests={[]} />);
  });

  it('Renders a list of intererests', () => {
    const interests = initialState.user.user.interests;
    const wrapper =  shallow(<EditInterests interests={interests} />);
    expect(wrapper.html()).toEqual('<ul class="edit-interests"><li>Mountain Biking <button class="small">delete</button></li><li>Scuba diving <button class="small">delete</button></li><li>Jazz <button class="small">delete</button></li></ul>');
  });
});