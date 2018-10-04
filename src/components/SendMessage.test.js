import React from 'react';
import { shallow } from 'enzyme';
import RichTextEditor from 'react-rte';
const editorState = RichTextEditor.createEmptyValue();

import { SendMessage } from './SendMessage';

// Mock the async actions
const mockAddMessageAndGetConversations = {
  type: 'ADD_MESSAGE_AND_GET_CONVERSATIONS'
};

jest.mock('../actions/messages', () => Object.assign({},
  require.requireActual('../actions/messages'),
  {
    addMessageAndGetConversations: jest.fn().mockImplementation(() => {
        return mockAddMessageAndGetConversations;
    })
  }
));

describe('<SendMessage />', () => {
  
  it('Renders without crashing', () => {
    shallow(<SendMessage editorState={editorState} conversationId={'fake'} />);
  });

  it('Sends the message', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<SendMessage dispatch={dispatch} editorState={editorState} conversationId={'fake'} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(dispatch).toHaveBeenLastCalledWith(mockAddMessageAndGetConversations);
  });

});