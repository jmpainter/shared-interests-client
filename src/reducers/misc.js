import { SET_COORDINATES, TOGGLE_MAIN_MENU } from '../actions/misc';

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
  }
  return state;
}