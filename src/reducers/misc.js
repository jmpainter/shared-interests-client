import { 
  SET_COORDINATES, 
  TOGGLE_MAIN_MENU, 
  SET_AUTO_COMPLETE_DATA, 
  SET_INPUT_VALUE, 
  SET_NEW_INTEREST } from '../actions/misc';

const initialState = {
  latitude: null,
  longitude: null,
  mainMenuOpen: false
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
  } else if (action.type === SET_NEW_INTEREST) {
    return Object.assign({}, state, {
      newInterest: action.interest
    });
  }
  return state;
}
