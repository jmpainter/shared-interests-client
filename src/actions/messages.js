import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { getConversations } from './conversations';

export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const addMessageSuccess = () => ({
  type: ADD_MESSAGE_SUCCESS,
});

export const ADD_MESSAGE_ERROR = 'ADD_MESSAGES_ERROR';
export const addMessageError = error => ({
  type: ADD_MESSAGE_ERROR,
  error
});

export const addMessage = (conversationId, text) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const data = { id: conversationId, text };
  return fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    dispatch(addMessageSuccess());
  })
  .catch(err => {
    dispatch(addMessageError(err));
  });
}

export const addMessageAndGetConversations = (conversationId, text) => dispatch => {
  dispatch(addMessage(conversationId, text))
    .then(dispatch(getConversations()));
}
