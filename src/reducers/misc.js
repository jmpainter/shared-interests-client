import { SET_COORDINATES } from '../actions/misc';

const initialState = {
  latitude: null,
  longitude: null
};

export const miscReducer = (state = initialState, action) => {
  if(action.type === SET_COORDINATES) {
    console.log(action);

    const newState =  Object.assign({}, state, {
      latitude: action.latitude,
      longitude: action.longitude
    });
    console.log('new State: ' + JSON.stringify(newState));
    return newState;
    // return Object.assign({}, state, {
    //   latitude: action.latitude,
    //   longitude: action.longitude
    // });
  }
  return state;
}