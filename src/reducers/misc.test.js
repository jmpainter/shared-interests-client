import { miscReducer } from './index';

import {
  setCoordinates,
  toggleMainMenu,
  setAutoCompleteData,
  setInputValue,
  setEditorState
} from '../actions/misc';

const initialState = {
  latitude: null,
  longitude: null,
  mainMenuOpen: false,
  autoCompleteData: [],
  inputValue: ''
}

describe('miscReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = miscReducer(undefined, {type: '__UNKNOWN'});
    delete state.editorState;
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

  describe('setAutoCompleteData', () => {
    it('It should toggle the main menu state', () => {
      let state = {
        autoCompleteData: []
      }
      const data = [1, 2];
      state = miscReducer(state, setAutoCompleteData(data));
      expect(state).toEqual({
        autoCompleteData: data
      });
    });
  });  

  describe('setInputValue', () => {
    it('It should set the input value', () => {
      let state = {
        inputValue: ''
      }
      const value = 'new value';
      state = miscReducer(state, setInputValue(value));
      expect(state).toEqual({
        inputValue: value
      });
    });
  });  

  describe('setInputValue', () => {
    it('It should set the input value', () => {
      let state = {
        editorState: ''
      }
      const newState = 'new state';
      state = miscReducer(state, setEditorState(newState));
      expect(state).toEqual({
        editorState: newState
      });
    });
  });  

});
