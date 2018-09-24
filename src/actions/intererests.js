import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';
import { getUserInfo } from '../actions/users';

export const ADD_INTEREST_SUCCESS = 'ADD_INTEREST_SUCCESS';
export const addInterestSuccess = () => ({
  type: ADD_INTEREST_SUCCESS
});

export const ADD_INTEREST_ERROR = 'ADD_INTEREST_ERROR';
export const addInterestError = error => ({
  type: ADD_INTEREST_ERROR,
  error
});

export const addInterest = interest => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const data = {
    wikiPageId: interest.wikiPageId.toString(),
    name: interest.name
  }
  return fetch(`${API_BASE_URL}/interests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data)
  })
  .then(res => normalizeResponseErrors(res))
  .then(() => {
    dispatch(addInterestSuccess());
    dispatch(getUserInfo());
  })
  .catch(err => {
    dispatch(addInterestError(err));
  });
}