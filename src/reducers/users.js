import { 
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  GET_INTEREST_MATCHES_SUCCESS,
  GET_INTEREST_MATCHES_ERROR } from "../actions/users";

const initialState = {
  user: {},
  interestMatches: [],
  error: null
}

export const userReducer = (state = initialState, action) => {
  if(action.type === GET_USER_INFO_SUCCESS) {
    return Object.assign({}, state, {
      user: action.user,
      error: null
    });
  } else if (action.type === GET_USER_INFO_ERROR) { 
    return Object.assign({}, state, {
      error: action.error
    });
  }
  if(action.type === GET_INTEREST_MATCHES_SUCCESS) {
    return Object.assign({}, state, {
      interestMatches: action.matches,
      error: null
    });
  } else if (action.type === GET_INTEREST_MATCHES_ERROR) { 
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}