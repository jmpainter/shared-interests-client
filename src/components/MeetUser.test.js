import React from 'react';
import { shallow, mount } from 'enzyme';
import { MeetUser } from './MeetUser';
import { initialState } from '../setupTests';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import {  getOtherUser, putUserInfoAndGetUserInfo } from '../actions/users';
import { addConversation } from '../actions/conversations';
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore(initialState)

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
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    wrapper.find('.block-user').simulate('click');
    // make sure the last call to dispatch is for the correct thunk
    expect(dispatch.mock.calls[dispatch.mock.calls.length - 1][0].toString()).toEqual(putUserInfoAndGetUserInfo(dispatch).toString());
  });

  it('Should start a conversation', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    wrapper.find('.start-conversation').simulate('click');
    // make sure the last call to dispatch is for the correct thunk
    expect(dispatch.mock.calls[dispatch.mock.calls.length - 1][0].toString()).toEqual(addConversation(dispatch).toString());
  });

  it('Should get the other user\'s information', () => {
    const dispatch = jest.fn();
    // send in the user id parameter which would have been in the URL
    const match = { params: { id: 'fakeId' } };
    const wrapper =  shallow(<MeetUser store={store} history={[]} user={initialState.user.user} dispatch={dispatch} match={match} list={[]} />);
    // make sure the first call to dispatch is for the correct thunk
    expect(dispatch.mock.calls[0][0].toString()).toEqual(getOtherUser(dispatch).toString());
  });

});