import { interestsReducer } from './index';

import {
  addInterestSuccess,
  addInterestError,
  deleteInterestSuccess,
  deleteInterestError,
  getLatestInterestsSuccess,
  getLatestInterestsError
} from '../actions/interests';

import { initialState } from './interests';

describe('interestsReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = interestsReducer(undefined, {type: '__UNKNOWN'});
    delete state.editorState;
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = interestsReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('addInterestSuccess', () => {
    it('It should clear any errors on addInterestSuccess', () => {
      let state = {
        error: 'some error'
      }
      state = interestsReducer(state, addInterestSuccess({ lat: 22, lng: 44}));
      expect(state).toEqual({
        error: null
      });
    });
  });  

  describe('addInterestError', () => {
    it('It should add an error on addInterestError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = interestsReducer(state, addInterestError(error));
      expect(state).toEqual({
        error
      });
    });
  });  

  describe('deleteInterestSuccess', () => {
    it('It should clear any errors on deleteInterestSuccess', () => {
      let state = {
        error: 'some error'
      }
      state = interestsReducer(state, deleteInterestSuccess('fakeId'));
      expect(state).toEqual({
        error: null
      });
    });
  });  

  describe('deleteInterestError', () => {
    it('It should add an error on deleteInterestError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = interestsReducer(state, deleteInterestError(error));
      expect(state).toEqual({
        error
      });
    });
  });    

  describe('getLatestInterestsSuccess', () => {
    it('It should clear any errors on getLatestInterestsSuccess', () => {
      let state = {
        error: 'some error',
        latestInterests: null
      }
      const interest = 'Fake Interest'
      state = interestsReducer(state, getLatestInterestsSuccess(interest));
      expect(state).toEqual({
        error: null,
        latestInterests: interest
      });
    });
  });  

  describe('getLatestInterestsError', () => {
    it('It should add an error on getLatestInterestsError', () => {
      let state = {
        error: null
      }
      const error = {};
      state = interestsReducer(state, getLatestInterestsError(error));
      expect(state).toEqual({
        error
      });
    });
  });    

});
