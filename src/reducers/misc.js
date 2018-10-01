import { 
  SET_COORDINATES, 
  TOGGLE_MAIN_MENU, 
  SET_AUTO_COMPLETE_DATA, 
  SET_INPUT_VALUE,
  SET_EDITOR_STATE } from '../actions/misc';

import RichTextEditor from 'react-rte';

const initialState = {
  latitude: null,
  longitude: null,
  mainMenuOpen: false,
  autoCompleteData: [],
  inputValue: '',
  editorState: RichTextEditor.createEmptyValue()
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
  } else if (action.type === SET_AUTO_COMPLETE_DATA) {
    return Object.assign({}, state, {
      autoCompleteData: action.data
    });
  } else if (action.type === SET_INPUT_VALUE) {
    return Object.assign({}, state, {
      inputValue: action.value
    });
  } else if (action.type === SET_EDITOR_STATE) {
    return Object.assign({}, state, {
      editorState: action.value
    });
  } 

  return state;
}
