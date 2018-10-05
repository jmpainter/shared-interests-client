import { authReducer } from './index';

import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError
} from '../actions/auth';

import { initialState } from './auth';

describe('authReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    delete state.editorState;
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('It should set authToken on setAuthToken', () => {
      let state = {
        authToken: null,
      }
      const authToken = 'fake';
      state = authReducer(state, setAuthToken(authToken));
      expect(state).toEqual({
        authToken
      });
    });
  });    

  describe('clearAuth', () => {
    it('It should set loading to false and authToken, currentUser, and error to null on clearAuth', () => {
      let state = {
        authToken: 'fake',
        currentUser: {},
        loading: true,
        error: 'error'
      }
      state = authReducer(state, clearAuth());
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: false,
        error: null
      });
    });
  });    

  describe('authRequest', () => {
    it('It should set loading to false on authRequest', () => {
      let state = {
        loading: true
      }
      const currentUser = {};
      state = authReducer(state, authRequest());
      expect(state).toEqual({
        loading: false
      });
    });
  });    

  describe('authRequest', () => {
    it('It should set loading to false and currentUser on authRequest', () => {
      let state = {
        loading: true,
        currentUser: null
      }
      const currentUser = {};
      state = authReducer(state, authSuccess(currentUser));
      expect(state).toEqual({
        loading: false,
        currentUser
      });
    });
  });    

  describe('authRequest', () => {
    it('It should set loading to false and error on authRequest', () => {
      let state = {
        loading: true,
        error: null
      }
      const error = 'error';
      state = authReducer(state, authError(error));
      expect(state).toEqual({
        loading: false,
        error
      });
    });
  });    

});