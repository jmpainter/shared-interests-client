import { GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR } from "../actions/users";

const initialState = {
  user: {},
  error: null
}

export const userReducer = (state = initialState, action) => {
  if(action.type === GET_USER_INFO_SUCCESS) {
    console.log('from reducer user: ' + action.user);
    return Object.assign({}, state, {
      user: action.user,
      error: null
    });
  } else if (action.type === GET_USER_INFO_ERROR) { 
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}