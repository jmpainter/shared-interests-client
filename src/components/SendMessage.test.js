// project requirements for component testing: 
// smoke tests,
// component rendering based on props and state,
// testing callbacks and events

import React from 'react';
import { shallow } from 'enzyme';
import RichTextEditor from 'react-rte';
const editorState = RichTextEditor.createEmptyValue();

import { SendMessage } from './SendMessage';

// Replace the async action with a mocked synchronous version to test againsts
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
    // mock dispatch needs to return a promise for chained calls in component
    const dispatch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<SendMessage dispatch={dispatch} editorState={editorState} conversationId={'fake'} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(dispatch).toHaveBeenLastCalledWith(mockAddMessage);
  });

});