import React from 'react';
import { shallow } from 'enzyme';
import RichTextEditor from 'react-rte';
const editorState = RichTextEditor.createEmptyValue();

import { SendMessage } from './SendMessage';

// Mock the async actions
const mockAddMessage = {
  type: 'ADD_MESSAGE'
};

jest.mock('../actions/messages', () => Object.assign({},
  require.requireActual('../actions/messages'),
  {
    addMessage: jest.fn().mockImplementation(() => {
        return mockAddMessage;
    })
  }
));

describe('<SendMessage />', () => {
  
  it('Renders without crashing', () => {
    shallow(<SendMessage editorState={editorState} conversationId={'fake'} />);
  });

  it('Sends the message', () => {
    const dispatch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<SendMessage dispatch={dispatch} editorState={editorState} conversationId={'fake'} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(dispatch).toHaveBeenLastCalledWith(mockAddMessage);
  });

});