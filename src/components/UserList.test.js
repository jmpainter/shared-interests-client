// project requirements for component testing: 
// smoke tests,
// component rendering based on props and state,
// testing callbacks and events

import React from 'react';
import { shallow, mount } from 'enzyme';
import UserList from './UserList';
import { initialState } from '../setupTests';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<UserList />', () => {
  it('Renders without crashing', () => {
    shallow(<UserList list={[]} />);
  });

  it('Renders a list of interests and users', () => {
    const nearbyUsers = initialState.user.nearbyUsers;
    const wrapper = mount(<BrowserRouter history={browserHistory}><UserList list={nearbyUsers} /></BrowserRouter>);
    const users = wrapper.find('a');
    expect(users.at(0).text()).toEqual('amy - Larkspur 2.01 miles away');
    expect(users.at(1).text()).toEqual('sworth - San Rafael, CA, USA 4.73 miles away');
  });
});