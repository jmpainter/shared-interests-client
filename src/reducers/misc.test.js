import { miscReducer } from './index';

import {
  setCoordinates,
  toggleMainMenu,
  setAutoCompleteData,
  setInputValue,
  setEditorState
} from '../actions/misc';

import { initialState } from './misc';
// The rich text editor state has randomly generated keys, so editorState
// must be removed from tests
delete initialState.editorState;

describe('miscReducer', () => {
  
  it('Should set the initial state when nothing is passed in', () => {
    const state = miscReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = miscReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('addMessage', () => {
    it('It set latitude and longitude', () => {
      let state = {
        latitude: null,
        longitude: null
      }
      state = miscReducer(state, setCoordinates({ lat: 22, lng: 44}));
      expect(state).toEqual({
        latitude: 22,
        longitude: 44
      });
    });
  });  

  describe('toggleMainMenu', () => {
    it('It should toggle the main menu state', () => {
      let state = {
        mainMenuOpen: false
      }
      state = miscReducer(state, toggleMainMenu());
      expect(state).toEqual({
        mainMenuOpen: true
      });
    });
  });  

});
