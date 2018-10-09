import { userReducer } from './index';

import {
  getUserInfoSuccess,
  getUserInfoError,
  getInterestMatchesSuccess,
  getInterestMatchesError,
  getOtherUserSuccess,
  getOtherUserError,
  getNearbyUsersSuccess,
  getNearbyUsersError,
  getOtherUsersSuccess,
  getOtherUsersError,
  putUserInfoSuccess,
  putUserInfoError
} from '../actions/users';

import { initialState } from './users';

describe('userReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = userReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = userReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('getUserInfoSuccess', () => {
    it('It should clear any errors and set the user on getUserInfoSuccess', () => {
      let state = {
        user: null,
        error: 'some error'
      }
      const user = {};
      state = userReducer(state, getUserInfoSuccess(user));
      expect(state).toEqual({
        user,
        error: null
      });
    });
  });  

  describe('getUserInfoError', () => {
    it('It should add an error on getUserInfoError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = userReducer(state, getUserInfoError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

  describe('getInterestMatchesSuccess', () => {
    it('It should clear any errors and set the interestMatches on getUserInfoSuccess', () => {
      let state = {
        interestMatches: null,
        error: 'some error'
      }
      const interestMatches = {};
      state = userReducer(state, getInterestMatchesSuccess(interestMatches));
      expect(state).toEqual({
        interestMatches,
        error: null
      });
    });
  });  

  describe('getInterestMatchesError', () => {
    it('It should add an error on getInterestMatchesError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = userReducer(state, getInterestMatchesError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

  describe('getOtherUserSuccess', () => {
    it('It should clear any errors and set the meetUser on getUserInfoSuccess', () => {
      let state = {
        meetUser: null,
        error: 'some error'
      }
      const meetUser = {};
      state = userReducer(state, getOtherUserSuccess(meetUser));
      expect(state).toEqual({
        meetUser,
        error: null
      });
    });
  });  

  describe('getOtherUserError', () => {
    it('It should add an error on getOtherUserError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = userReducer(state, getOtherUserError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

  describe('getNearbyUsersSuccess', () => {
    it('It should clear any errors and set the meetUser on getNearbyUsersSuccess', () => {
      let state = {
        nearbyUsers: null,
        error: 'some error'
      }
      const nearbyUsers = {};
      state = userReducer(state, getNearbyUsersSuccess(nearbyUsers));
      expect(state).toEqual({
        nearbyUsers,
        error: null
      });
    });
  });  

  describe('getNearbyUsersError', () => {
    it('It should add an error on getNearbyUsersError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = userReducer(state, getNearbyUsersError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

  describe('getOtherUsersSuccess', () => {
    it('It should clear any errors and set the meetUser on getOtherUserSuccess', () => {
      let state = {
        otherUsers: null,
        error: 'some error'
      }
      const otherUsers = {};
      state = userReducer(state, getOtherUsersSuccess(otherUsers));
      expect(state).toEqual({
        otherUsers,
        error: null
      });
    });
  });  

  describe('getOtherUsersError', () => {
    it('It should add an error on getNearbyUsersError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = userReducer(state, getOtherUsersError(error));
      expect(state).toEqual({
        error
      });
    });
  });    

  describe('putUserInfoSuccess', () => {
    it('It should clear any errors on putUserInfoSuccess', () => {
      let state = {
        error: 'some error'
      }
      const nearbyUsers = {};
      state = userReducer(state, putUserInfoSuccess(nearbyUsers));
      expect(state).toEqual({
        error: null
      });
    });
  });  

  describe('putUserInfoError', () => {
    it('It should add an error on putUserInfoError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = userReducer(state, putUserInfoError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

});