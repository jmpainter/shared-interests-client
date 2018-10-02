import React from 'react';
import { shallow } from 'enzyme';

import MessageThread from './MessageThread';
import { initialState } from '../setupTests';

describe('<MessageThread />', () => {
  
  it('Renders without crashing', () => {
    shallow(<MessageThread messages={[]} />);
  });

  it('Renders a list of interests', () => {
    const messages = initialState.conversations.conversations[0].messages;
    const wrapper = shallow(<MessageThread messages={messages} />);
    expect(wrapper.html()).toEqual('<div class="message-thread"><div><span class="message-sender">josh - </span><span class="message-date">9/12/2018</span><div class="message-text">Hello there</div></div><div><span class="message-sender">amy - </span><span class="message-date">9/27/2018</span><div class="message-text"><p>This is a reply from amy</p></div></div><div><span class="message-sender">josh - </span><span class="message-date">9/27/2018</span><div class="message-text"><p>Another message from Josh</p></div></div></div>');
  });

});