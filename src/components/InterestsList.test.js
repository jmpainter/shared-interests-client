import React from 'react';
import { shallow } from 'enzyme';

import InterestsList from './InterestsList';

describe('<InterestsList />', () => {
  it('Renders without crashing', () => {
    shallow(<InterestsList list={[]} />);
  });

  it('Renders a list of interests', () => {

    const interests = [
      {
        _id: '5b9beb7f016c7837a0e36f30',
        name: 'Mountain Biking'
      },
      {
        _id: '5ba97d330623ae3c80573f80',
        name: 'Scuba diving'
      },
      {
        _id: '5ba97e970623ae3c80573f82',
        name: 'Jazz'
      }
    ];

    const wrapper = shallow(<InterestsList list={interests} />);
    expect(wrapper.html()).toEqual('<ul><li>Mountain Biking</li><li>Scuba diving</li><li>Jazz</li></ul>');
  })
});