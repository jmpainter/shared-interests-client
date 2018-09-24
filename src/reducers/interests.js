import { ADD_INTEREST_SUCCESS, ADD_INTEREST_ERROR } from '../actions/intererests';

const initialState = {
  error: null
}

export const interestsReducer = (state = initialState, action) => {
  if(action.type === ADD_INTEREST_SUCCESS) {
    return Object.assign({}, state, {
      error: null
    });
  } else if (action.type === ADD_INTEREST_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}