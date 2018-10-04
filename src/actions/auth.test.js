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
import {API_BASE_URL} from '../config';

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
    const authToken = initialState.auth.authToken;
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
    
    return login('sam@gmail.com', 'password')(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`,  {"body": "{\"username\":\"sam@gmail.com\",\"password\":\"password\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"});
      expect(dispatch).toHaveBeenCalledWith(authSuccess(decodedToken.user));
    });
  });
});

describe('refreshAuthToken', () => {
  it('Should dispatch authSuccess', () => {
    const authToken = initialState.auth.authToken;
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

    const getState = () => {
      return { auth: { authToken }}
    }
    
    return refreshAuthToken('sam@gmail.com', 'password')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/refresh`,  {"headers": {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWJiNTczY2I0NGYyNDkzNjU4OTAxYmUwIiwiZmlyc3ROYW1lIjoiU2FtIiwibGFzdE5hbWUiOiJSZXlub2xkcyIsInNjcmVlbk5hbWUiOiJzcmVub2xkcyIsImxvY2F0aW9uIjoiQmVya2VsZXksIENBLCBVU0EiLCJ1c2VybmFtZSI6InNhbUBnbWFpbC5jb20ifSwiaWF0IjoxNTM4NjE4Mzc3LCJleHAiOjE1MzkyMjMxNzcsInN1YiI6InNhbUBnbWFpbC5jb20ifQ.2RqwJPuOmvPb5k4T-9HoEYfH4-AyLNGQwqjM43Bu11o"}, "method": "POST"});
      expect(dispatch).toHaveBeenCalledWith(authSuccess(decodedToken.user));
    });
  });
});