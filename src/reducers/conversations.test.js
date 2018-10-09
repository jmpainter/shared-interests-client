import { conversationsReducer } from './index';

import {
  getConversationsSuccess,
  getConversationsError,
  addConversationSuccess,
  addConversationError,
} from '../actions/conversations';

import { initialState } from './conversations';

describe('conversationsReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = conversationsReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = conversationsReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('getConversationsSuccess', () => {
    it('It should clear any errors and set conversations on getConversationsSuccess', () => {
      let state = {
        error: 'some error',
        conversations: null
      }
      const conversations = [];
      state = conversationsReducer(state, getConversationsSuccess(conversations));
      expect(state).toEqual({
        error: null,
        conversations
      });
    });
  });  

  describe('getConversationsError', () => {
    it('It should add an error on addInterestError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = conversationsReducer(state, getConversationsError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

  describe('addConversationSuccess', () => {
    it('It should clear any errors on addConversationSuccess', () => {
      let state = {
        error: 'some error'
      }
      const conversations = [];
      state = conversationsReducer(state, addConversationSuccess(conversations));
      expect(state).toEqual({
        error: null
      });
    });
  });  

  describe('getConversationsError', () => {
    it('It should add an error on addConversationError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = conversationsReducer(state, addConversationError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

});