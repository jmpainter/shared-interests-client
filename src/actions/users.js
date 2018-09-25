import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    const { reason, message, location } = err;
    if(reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
  });
}

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const getUserInfoSuccess = user => ({
  type: GET_USER_INFO_SUCCESS,
  user
});

export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';
export const getUserInfoError = error => ({
  type: GET_USER_INFO_ERROR,
  error
});

export const getUserInfo = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(user => {
    dispatch(getUserInfoSuccess(user))
  })
  .catch(err => {
    dispatch(getUserInfoError(err));
  });
}

export const GET_INTEREST_MATCHES_SUCCESS = 'GET_INTEREST_MATCHES_SUCCESS';
export const getInterestMatchesSuccess = matches => ({
  type: GET_INTEREST_MATCHES_SUCCESS,
  matches
});

export const GET_INTEREST_MATCHES_ERROR = 'GET_INTEREST_MATCHES_ERROR';
export const getInterestMatchesError = error => ({
  type: GET_INTEREST_MATCHES_ERROR,
  error
});

export const getInterestMatches = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users?interests=true`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(matches => {
    // group results by interest
    const resultObj = {};
    const resultArray = [];
    matches.forEach(match => {
      if(!resultObj[match.interest]) {
        resultObj[match.interest.name] = [];
      }
      resultObj[match.interest.name].push(match.user);
    });
    for(let interest in resultObj) {
      resultArray.push({interest: interest, users: resultObj[interest]});
    }
    dispatch(getInterestMatchesSuccess(resultArray));
  })
  .catch(err => {
    dispatch(getInterestMatchesError(err));
  });
}

export const GET_OTHER_USER_SUCCESS = 'GET_OTHER_USER_SUCCESS';
export const getOtherUserSuccess = userData => ({
  type: GET_OTHER_USER_SUCCESS,
  userData
});

export const GET_OTHER_USER_ERROR = 'GET_OTHER_USER_ERROR';
export const getOtherUserError = error => ({
  type: GET_OTHER_USER_ERROR,
  error
});

export const getOtherUser = userId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(user => {
    dispatch(getOtherUserSuccess(user));
  })
  .catch(err => {
    dispatch(getOtherUserError(err));
  });
}

// export const PUT_USER_INFO_SUCCESS = 'PUT_USER_INFO_SUCCESS';
// export const putUserInfoSuccess = data => ({
//   type: PUT_USER_INFO_SUCCESS,
//   data
// });

// export const PUT_USER_INFO_ERROR = 'PUT_USER_INFO_ERROR';
// export const putUserInfoError = error => ({
//   type: GET_USER_INFO_ERROR,
//   error
// });

// export const putUserInfo = user => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/users`, {
//     method: 'PUT',
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     },
//     body: user
//   })
//   .then(res => normalizeResponseErrors(res))
//   .then(res => res.json())
//   .then(({ data }) => dispatch(putUserInfoSuccess(data)))
//   .catch(err => {
//     dispatch(putUserInfoError(err));
//   });
// }