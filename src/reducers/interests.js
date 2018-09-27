import { 
  ADD_INTEREST_SUCCESS,
  ADD_INTEREST_ERROR,
  DELETE_INTEREST_SUCCESS,
  DELETE_INTEREST_ERROR,
  GET_LATEST_INTERESTS_SUCCESS,
  GET_LATEST_INTERESTS_ERROR } from '../actions/intererests';

const initialState = {
  error: null,
  latestInterests: []
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
  } else if(action.type === DELETE_INTEREST_SUCCESS) {
    return Object.assign({}, state, {
      error: null
    });
  } else if (action.type === DELETE_INTEREST_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if(action.type === GET_LATEST_INTERESTS_SUCCESS) {
    return Object.assign({}, state, {
      latestInterests: action.interests,
      error: null
    });
  } else if (action.type === GET_LATEST_INTERESTS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}