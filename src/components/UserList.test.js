import React from 'react';
import { shallow } from 'enzyme';
import UserList from './UserList';
import { initialState } from '../setupTests';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<UserList />', () => {
  it('Renders without crashing', () => {
    shallow(<UserList list={[]} />);
  });

  it('Renders a list of interests and users', () => {
    const nearbyUsers = initialState.user.nearbyUsers;
    const wrapper = shallow(<BrowserRouter history={browserHistory}><UserList list={nearbyUsers} /></BrowserRouter>);
    expect(wrapper.html()).toEqual('<div class="user-list"><ul><li><a href="/meet-user/5b9881ec8b887645bc2454a0">amy - Larkspur 2.01 miles away</a></li><li><a href="/meet-user/5ba45dd712578b538c5d4257">sworth - San Rafael, CA, USA 4.73 miles away</a></li></ul></div>');
  });
});