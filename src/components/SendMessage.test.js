import React from 'react';
import { shallow } from 'enzyme';
import { addMessageAndGetConversations } from '../actions/messages';
import RichTextEditor from 'react-rte';
const editorState = RichTextEditor.createEmptyValue();

import { SendMessage } from './SendMessage';

describe('<SendMessage />', () => {
  
  it('Renders without crashing', () => {
    shallow(<SendMessage editorState={editorState} conversationId={'fake'} />);
  });

  it('Sends the message', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<SendMessage dispatch={dispatch} editorState={editorState} conversationId={'fake'} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(dispatch.mock.calls[dispatch.mock.calls.length - 1][0].toString()).toEqual(addMessageAndGetConversations(dispatch).toString());
  });

});