import { GET_CONVERSATIONS_SUCCESS, GET_CONVERSATIONS_ERROR } from '../actions/conversations';

const initialState = {
  conversations: [],
  error: null
}

export const conversationsReducer = (state = initialState, action) => {
  if(action.type === GET_CONVERSATIONS_SUCCESS) {
    return Object.assign({}, state, {
      conversations: action.data,
      error: null
    });
  } else if (action.type === GET_CONVERSATIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}