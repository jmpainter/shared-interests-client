import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors, formatIntoInterestCategories } from './utils';
import { login } from '../actions/auth';

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
    const resultArray = formatIntoInterestCategories(matches);
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

export const GET_NEARBY_USERS_SUCCESS = 'GET_NEARBY_USERS_SUCCESS';
export const getNearbyUsersSuccess = users => ({
  type: GET_NEARBY_USERS_SUCCESS,
  users
});

export const GET_NEARBY_USERS_ERROR = 'GET_NEARBY_USERS_ERROR';
export const getNearbyUsersError = error => ({
  type: GET_NEARBY_USERS_ERROR,
  error
});

export const getNearbyUsers = userId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users?nearby=true`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(users => {
    dispatch(getNearbyUsersSuccess(users));
  })
  .catch(err => {
    dispatch(getNearbyUsersError(err));
  });
}

export const GET_OTHER_USERS_SUCCESS = 'GET_OTHER_USERS_SUCCESS';
export const getOtherUsersSuccess = users => ({
  type: GET_OTHER_USERS_SUCCESS,
  users
});

export const GET_OTHER_USERS_ERROR = 'GET_OTHER_USERS_ERROR';
export const getOtherUsersError = error => ({
  type: GET_OTHER_USERS_ERROR,
  error
});

export const getOtherUsers = userId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users?other=true`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(users => {
    // group results by interest
    const resultArray = formatIntoInterestCategories(users);
    dispatch(getOtherUsersSuccess(resultArray));
  })
  .catch(err => {
    dispatch(getOtherUsersError(err));
  });
}

export const PUT_USER_INFO_SUCCESS = 'PUT_USER_INFO_SUCCESS';
export const putUserInfoSuccess = () => ({
  type: PUT_USER_INFO_SUCCESS
});

export const PUT_USER_INFO_ERROR = 'PUT_USER_INFO_ERROR';
export const putUserInfoError = error => ({
  type: GET_USER_INFO_ERROR,
  error
});

export const putUserInfo = newUserData => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/${newUserData.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(newUserData)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(() => dispatch(putUserInfoSuccess()))
  .catch(err => {
    dispatch(putUserInfoError(err));
  });
}

export const putUserInfoAndGetUserInfo = newUserData => dispatch => {
  dispatch(putUserInfo(newUserData))
    .then(() => dispatch(getUserInfo()));
}

export const registerUserAndLoginUser = user => dispatch => {
  dispatch(registerUser(user))
    .then(() => dispatch(login(user.username, user.password)));
}