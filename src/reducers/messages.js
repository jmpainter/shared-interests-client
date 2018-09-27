import { 
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_ERROR
} from '../actions/messages';

import { getConversations } from '../actions/conversations';

const initialState = {
  error: null
}

export const messagesReducer = (state = initialState, action) => {
  if(action.type === ADD_MESSAGE_SUCCESS) {

    return Object.assign({}, state, {
      error: null
    });
  } else if (action.type === ADD_MESSAGE_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}