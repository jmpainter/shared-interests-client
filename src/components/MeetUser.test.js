import React from 'react';
import { shallow, mount } from 'enzyme';
import { MeetUser } from './MeetUser';
import { initialState } from '../setupTests';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

// Mock the async actions
const mockPutUserInfoAndGetUserInfo = {
  type: 'PUT_USER_INFO_AND_GET_USER_INFO'
};

const mockAddConversation = {
  type: 'ADD_CONVERSATION'
};

const mockGetOtherUser = {
  type: 'GET_OTHER_USER'
};

jest.mock('../actions/users', () => Object.assign({},
  require.requireActual('../actions/users'),
  {
    putUserInfoAndGetUserInfo: jest.fn().mockImplementation(() => {
        return mockPutUserInfoAndGetUserInfo;
    }),
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
    shallow(<MeetUser store={store} dispatch={dispatch} match={match}list={[]} />);
  });

  it('Should block a user', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} isTest={true} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    debugger;
    wrapper.find('.block-user').simulate('click');
    // make sure the last call to dispatch is for the correct thunk
    debugger;
    expect(dispatch).toHaveBeenLastCalledWith(mockPutUserInfoAndGetUserInfo);
  });

  it('Should start a conversation', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    wrapper.find('.start-conversation').simulate('click');
    // make sure the last call to dispatch is for the correct thunk
    // expect(dispatch.mock.calls[dispatch.mock.calls.length - 1][0].toString()).toEqual(addConversation(dispatch).toString());
    expect(dispatch).toHaveBeenLastCalledWith(mockAddConversation);
  });

  it('Should get the other user\'s information', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    // make sure the first call to dispatch is for the correct thunk
    expect(dispatch).toHaveBeenLastCalledWith(mockGetOtherUser);
  });

});