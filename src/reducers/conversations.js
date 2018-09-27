import { 
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  ADD_CONVERSATION_SUCCESS,
  ADD_CONVERSATION_ERROR,
  SET_CURRENT_CONVERSATION   } from '../actions/conversations';

const initialState = {
  conversations: [],
  currentConversation: null,
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
  } else if(action.type === ADD_CONVERSATION_SUCCESS) {
    return Object.assign({}, state, {
      conversations: action.data,
      error: null
    });
  } else if (action.type === ADD_CONVERSATION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } 
  // else if (action.type === SET_CURRENT_CONVERSATION) {
  //   return Object.assign({}, state, {
  //     currentConversation: action.conversation
  //   });
  // }
  return state;
}