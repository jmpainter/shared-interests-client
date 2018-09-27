export const SET_COORDINATES = 'SET_COORDINATES';
export const setCoordinates = coordinates => ({
  type: SET_COORDINATES,
  latitude: coordinates.lat,
  longitude: coordinates.lng
});

export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
export const toggleMainMenu = () => ({
  type: TOGGLE_MAIN_MENU
});

export const SET_AUTO_COMPLETE_DATA = 'SET_AUTO_COMPLETE_DATA';
export const setAutoCompleteData = data => ({
  type: SET_AUTO_COMPLETE_DATA,
  data
});

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const setInputValue = value => ({
  type: SET_INPUT_VALUE,
  value
});

export const SET_EDITOR_STATE = 'SET_EDITOR_STATE';
export const setEditorState = value => ({
  type: SET_EDITOR_STATE,
  value
});