import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS';
export const getConversationSuccess = data => ({
  type: GET_CONVERSATIONS_SUCCESS,
  data
});

export const GET_CONVERSATIONS_ERROR = 'GET_CONVERSATIONS_ERROR';
export const getConversationError = error => ({
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
    dispatch(getConversationSuccess(data.conversations));
  })
  .catch(err => {
    dispatch(getConversationError(err));
  });
}