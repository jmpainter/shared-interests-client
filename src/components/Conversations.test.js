import React from 'react';
import { shallow } from 'enzyme';
import Conversations from './Conversations';
import { initialState } from '../setupTests';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<Conversations />', () => {
  it('Renders without crashing', () => {
    shallow(<Conversations list={[]} />);
  });

  it('Renders a list of conversations', () => {
    const conversations = initialState.conversations.conversations;
    const user = initialState.user.user;
    const wrapper = shallow(<BrowserRouter history={browserHistory}><Conversations user={user} list={conversations} /></BrowserRouter>);
    expect(wrapper.html()).toEqual('<ul><li><a href="/meet-user/5b9881ec8b887645bc2454a0">Another message from Josh - amy</a></li><li><a href="/meet-user/5ba45dd712578b538c5d4257">hello - sworth</a></li></ul>')
  });
});