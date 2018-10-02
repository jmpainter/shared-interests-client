import React from 'react';
import { shallow } from 'enzyme';

import { AddEditInterests } from './AddEditInterests';

describe('<AddEditInterests />', () => {
  
  it('Renders without crashing', () => {
    shallow(<AddEditInterests />);
  });

  it('Pushes \'\\profile\' to history when done button is clicked', () => {
    const history = [];
    const wrapper = shallow(<AddEditInterests history={history} />);
    wrapper.find('.done-editing').simulate('click');
    expect(history[0]).toEqual('/profile');
  })

});