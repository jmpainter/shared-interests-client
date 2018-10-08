import React from 'react';
import { shallow } from 'enzyme';

import MessageThread from './MessageThread';
import { initialState } from '../setupTests';

describe('<MessageThread />', () => {

  it('Renders without crashing', () => {
    shallow(<MessageThread messages={[]} />);
  });

  it('Renders a list of messages', () => {
    const messageList = initialState.conversations.conversations[0].messages;
    const wrapper = shallow(<MessageThread messages={messageList} />);
    const messages = wrapper.children()
    messages.forEach((child, index) => {
      expect(child.text()).toEqual(messageList[index].sender.screenName + ' - ' + new Date(messageList[index].date).toLocaleDateString("en-US"));
    });
  });

});