import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const wrapper = mount(<BrowserRouter history={browserHistory}><Conversations user={user} list={conversations} /></BrowserRouter>);
    const conversationList = wrapper.find('a');
    expect(conversationList.at(0).getElement().props.href).toEqual('/meet-user/5b9881ec8b887645bc2454a0');
    expect(conversationList.at(0).text()).toEqual('Another message from Josh - amy');
    expect(conversationList.at(1).getElement().props.href).toEqual('/meet-user/5ba45dd712578b538c5d4257');
    expect(conversationList.at(1).text()).toEqual('hello - sworth');
  });
});