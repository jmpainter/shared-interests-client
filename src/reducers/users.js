import { 
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  GET_INTEREST_MATCHES_SUCCESS,
  GET_INTEREST_MATCHES_ERROR,
  GET_OTHER_USER_SUCCESS,
  GET_OTHER_USER_ERROR,
  GET_NEARBY_USERS_SUCCESS,
  GET_NEARBY_USERS_ERROR
} from "../actions/users";

const initialState = {
  user: {},
  interestMatches: [],
  nearbyUsers: [],
  meetUser: {},
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
  } else if(action.type === GET_OTHER_USER_SUCCESS) {
    return Object.assign({}, state, {
      meetUser: action.userData,
      error: null
    });
  } else if (action.type === GET_OTHER_USER_ERROR) { 
    return Object.assign({}, state, {
      error: action.error
    });
  } else if(action.type === GET_NEARBY_USERS_SUCCESS) {
    return Object.assign({}, state, {
      nearbyUsers: action.users,
      error: null
    });
  } else if (action.type === GET_NEARBY_USERS_ERROR) { 
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}