import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS';
export const getConversationsSuccess = data => ({
  type: GET_CONVERSATIONS_SUCCESS,
  data
});

export const GET_CONVERSATIONS_ERROR = 'GET_CONVERSATIONS_ERROR';
export const getConversationsError = error => ({
  type: GET_CONVERSATIONS_ERROR,
  error
});

export const getConversations = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/conversations`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    dispatch(getConversationsSuccess(data.conversations));
  })
  .catch(err => {
    dispatch(getConversationsError(err));
  });
}

export const ADD_CONVERSATION_SUCCESS = 'ADD_CONVERSATION_SUCCESS';
export const addConversationSuccess = () => ({
  type: ADD_CONVERSATION_SUCCESS
});

export const ADD_CONVERSATION_ERROR = 'ADD_CONVERSATION_ERROR';
export const addConversationError = error => ({
  type: ADD_CONVERSATION_ERROR,
  error
});

export const addConversation = recipient => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const data = { recipient };
  return fetch(`${API_BASE_URL}/conversations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    dispatch(addConversationSuccess());
  })
  .catch(err => {
    dispatch(addConversationError(err));
  });
}
