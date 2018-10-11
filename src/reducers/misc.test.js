import { miscReducer } from './index';

import {
  setCoordinates,
  toggleMainMenu,
  setEditorState,
  updateInputValue,
  clearSuggestions,
  loadSuggestionsBegin,
  maybeUpdateSuggestions
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

  describe('setEditorState', () => {
    it('It should set the editor state', () => {
      let state = {
        editorState: { text: 'fake' }
      }
      const value = 'new value'
      state = miscReducer(state, setEditorState(value));
      expect(state).toEqual({
        editorState: { text: value }
      });
    });
  });  

  describe('updateInputValue', () => {
    it('It should set the value state', () => {
      let state = {
        value: 'fake'
      }
      const value = 'new value'
      state = miscReducer(state, updateInputValue(value));
      expect(state).toEqual({
        value
      });
    });
  });  

  describe('clearSuggestions', () => {
    it('It should clear the suggestions', () => {
      let state = {
        suggestions: [1, 2, 3]
      }
      const value = 'new value'
      state = miscReducer(state, clearSuggestions());
      expect(state).toEqual({
        suggestions: []
      });
    });
  });  

  describe('loadSuggestionsBegin', () => {
    it('It should set isLoading to true', () => {
      let state = {
        isLoading: false
      }
      state = miscReducer(state, loadSuggestionsBegin());
      expect(state).toEqual({
        isLoading: true
      });
    });
  });  

  describe('maybeUpdateSuggestions', () => {
    it('It should set isLoading to true if the action value does not equal the state value', () => {
      let state = {
        isLoading: false,
        value: 'a'
      }
      state = miscReducer(state, maybeUpdateSuggestions('ab', []));
      expect(state).toEqual({
        isLoading: true,
        value: 'a'
      });
    });
  });  

  describe('maybeUpdateSuggestions', () => {
    it('It should set isLoading to false and suggestions if the action value does not equal the state value', () => {
      let state = {
        isLoading: true,
        suggestions: [],
        value: 'a'
      }
      const newSuggestions = [1, 2, 3];
      state = miscReducer(state, maybeUpdateSuggestions(newSuggestions, 'a'));
      expect(state).toEqual({
        isLoading: false,
        suggestions: newSuggestions,
        value: 'a'
      });
    });
  });  

});
