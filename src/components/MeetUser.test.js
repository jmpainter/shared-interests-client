// Project requirements for component testing: 
// Smoke tests,
// Component rendering based on props and state,
// Testing callbacks and events

import React from 'react';
import { shallow, mount } from 'enzyme';
import { MeetUser } from './MeetUser';
import { initialState } from '../setupTests';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

// Replace the async action with a mocked synchronous version to test againsts

const mockAddConversation = {
  type: 'ADD_CONVERSATION'
};

const mockGetOtherUser = {
  type: 'GET_OTHER_USER'
};

jest.mock('../actions/users', () => Object.assign({},
  require.requireActual('../actions/users'),
  {
    getOtherUser: jest.fn().mockImplementation(() => {
        return mockGetOtherUser;
    })
  }
));

jest.mock('../actions/conversations', () => Object.assign({},
  require.requireActual('../actions/conversations'),
  {
    addConversation: jest.fn().mockImplementation(() => {
        return mockAddConversation;
    })
  }
));

describe('<MeetUser />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    const match = { params: { id: 'fakeId' } };
    shallow(<MeetUser store={store} dispatch={dispatch} match={match} list={[]} />);
  });

  it('Should start a conversation', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    wrapper.find('.start-conversation').simulate('click');
    // call to dispatch should be to mockAddConversation
    expect(dispatch).toHaveBeenLastCalledWith(mockAddConversation);
  });

  it('Should get the other user\'s information', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    // call to dispatch should be to mockGetOtherUser
    expect(dispatch).toHaveBeenLastCalledWith(mockGetOtherUser);
  });

});