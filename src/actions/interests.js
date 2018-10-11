import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

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
  })
  .catch(err => {
    dispatch(addInterestError(err));
  });
}

export const DELETE_INTEREST_SUCCESS = 'DELETE_INTEREST_SUCCESS';
export const deleteInterestSuccess = () => ({
  type: DELETE_INTEREST_SUCCESS
});

export const DELETE_INTEREST_ERROR = 'DELETE_INTEREST_ERROR';
export const deleteInterestError = error => ({
  type: DELETE_INTEREST_ERROR,
  error
});

export const deleteInterest = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/interests/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
  })
  .then(res => normalizeResponseErrors(res))
  .then(() => {
    dispatch(deleteInterestSuccess());
  })
  .catch(err => {
    dispatch(deleteInterestError(err));
  });
}

export const GET_LATEST_INTERESTS_SUCCESS = 'GET_LATEST_INTERESTS_SUCCESS';
export const getLatestInterestsSuccess = interests => ({
  interests,
  type: GET_LATEST_INTERESTS_SUCCESS
});

export const GET_LATEST_INTERESTS_ERROR = 'GET_LATEST_INTERESTS_ERROR';
export const getLatestInterestsError = error => ({
  type: GET_LATEST_INTERESTS_ERROR,
  error
});

export const getLatestInterests = () => dispatch => {
  return fetch(`${API_BASE_URL}/interests`, {
    method: 'GET'
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(interests => {
    dispatch(getLatestInterestsSuccess(interests));
  })
  .catch(err => {
    dispatch(getLatestInterestsError(err));
  });
}