import { messagesReducer } from './index';
import { addMessage } from '../actions/messages';

describe('messagesReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = messagesReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = messagesReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('addMessage', () => {
    it('it should clear any errors', () => {
      let state;
      state = messagesReducer(state, addMessage('fakeId', 'text'));
      expect(state).toEqual({
          error: null
      });
    });
  });  

});