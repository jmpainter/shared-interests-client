import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';

export const addInterest = interest => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/interests`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: interest
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({ data }) => dispatch())
  .catch(err => {
    dispatch(interestsError(err));
  });
}