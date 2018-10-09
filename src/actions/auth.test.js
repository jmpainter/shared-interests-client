import jwtDecode from 'jwt-decode';
import {
  SET_AUTH_TOKEN,
  setAuthToken,
  CLEAR_AUTH,
  clearAuth,
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  AUTH_ERROR,
  authError,
  login,
  refreshAuthToken
} from './auth';
import { API_BASE_URL } from '../config';

import { initialState } from '../setupTests';

describe('setAuthToken', () => {
  it('Should return the action', () => {
    const authToken = 'fake';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe('clearAuth', () => {
  it('Should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe('authRequest', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('authSuccess', () => {
  it('Should return the action', () => {
    const currentUser = {};
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe('authError', () => {
  it('Should return the action', () => {
    const error = {};
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('login', () => {
  it('Should dispatch authSuccess', () => {
    // initialState contains a test user authtoken
    const authToken = initialState.auth.authToken;
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return { authToken }
        }
      });
    });
    const dispatch = jest.fn();
    const decodedToken = jwtDecode(authToken);
    // call the function returned from the async action creator
    return login('sam@gmail.com', 'password')(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`,  {"body": "{\"username\":\"sam@gmail.com\",\"password\":\"password\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"});
      expect(dispatch).toHaveBeenCalledWith(authSuccess(decodedToken.user));
    });
  });
});

describe('refreshAuthToken', () => {
  it('Should dispatch authSuccess', () => {
    // initialState contains a test user authtoken
    const authToken = initialState.auth.authToken;
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return { authToken }
        }
      });
    });
    const dispatch = jest.fn();
    const decodedToken = jwtDecode(authToken);
    // mock getState to return authtoken for authorization header in async action creator
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator
    return refreshAuthToken('sam@gmail.com', 'password')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/refresh`,  {"headers": {"Authorization": "Bearer fake"}, "method": "POST"});
      expect(dispatch).toHaveBeenCalledWith(authSuccess(decodedToken.user));
    });
  });
});