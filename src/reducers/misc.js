// All state is handled by redux in this app, so various elements such 
// as ui operations and input values are handled by this reducer
import { 
  SET_COORDINATES, 
  TOGGLE_MAIN_MENU, 
  SET_EDITOR_STATE,
  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN } from '../actions/misc';

export const initialState = {
  latitude: null,
  longitude: null,
  mainMenuOpen: false,
  editorState: { text: '' },
  value: '',
  suggestions: ['one', 'two', 'three'],
  isLoading: false
};

export const miscReducer = (state = initialState, action) => {
  if(action.type === SET_COORDINATES) {
    return Object.assign({}, state, {
      latitude: action.latitude,
      longitude: action.longitude
    });
  } else if (action.type === TOGGLE_MAIN_MENU) {
    return Object.assign({}, state, {
      mainMenuOpen: !state.mainMenuOpen
    });
  } else if (action.type === SET_EDITOR_STATE) {
    return Object.assign({}, state, {
      editorState: { text: action.value }
    });
  } else if (action.type === UPDATE_INPUT_VALUE) {
    return Object.assign({}, state, {
      value: action.value
    });
  } else if (action.type === CLEAR_SUGGESTIONS) {
    return Object.assign({}, state, {
      suggestions: []
    });
  } else if (action.type === LOAD_SUGGESTIONS_BEGIN) {
    return Object.assign({}, state, {
      isLoading: true
    });
  } else if (action.type === MAYBE_UPDATE_SUGGESTIONS) {
      if (action.value !== state.value) {
        return Object.assign({}, state, {
          isLoading: true
        });
      } else {
        return Object.assign({}, state, {
          suggestions: action.suggestions,
          isLoading: false
        });
      }
  }
  return state;
}
