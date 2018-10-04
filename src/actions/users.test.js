import {
  registerUser,
  getUserInfoSuccess,
  getUserInfo,
  getInterestMatchesSuccess,
  getInterestMatches,
  getOtherUserSuccess,
  getOtherUser,
  getNearbyUsersSuccess,
  getNearbyUsers,
  getOtherUsersSuccess,
  getOtherUsers,
  putUserInfoSuccess,
  putUserInfo
} from './users';

import { formatIntoInterestCategories } from './utils';

import {API_BASE_URL} from '../config';


describe('registerUser', () => {
  it('Should call fetch /users the action', () => {
    const user = '{ fake }';
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return { user }
        }
      });
    });
    const dispatch = jest.fn();

    return registerUser(user)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`,  {"body": "\"{ fake }\"", "headers": {"content-type": "application/json"}, "method": "POST"});
    });
  });
});

describe('getUserInfo', () => {
  it('Should dispatch getUserInfoSuccess', () => {
    const user = {};
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return user;
        }
      });
    });
    const dispatch = jest.fn();
    
    return getUserInfo()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getUserInfoSuccess(user));
    });
  });
});

describe('getInterestMatches', () => {
  it('Should dispatch getInterestMatchesSuccess', () => {
    const matches = [];
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return matches;
        }
      });
    });
    const dispatch = jest.fn();

    const resultArray = formatIntoInterestCategories(matches);
    dispatch(getInterestMatchesSuccess(resultArray));

    return getInterestMatches()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users?interests=true`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getInterestMatchesSuccess(matches));
    });
  });
});

describe('getOtherUser', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const otherUser = {};
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return otherUser;
        }
      });
    });
    const dispatch = jest.fn();

    return getOtherUser('fakeId')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/fakeId`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getOtherUserSuccess(otherUser));
    });
  });
});

describe('getNearbyUsers', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const users = [];
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return users;
        }
      });
    });
    const dispatch = jest.fn();

    return getNearbyUsers()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users?nearby=true`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getNearbyUsersSuccess(users));
    });
  });
});

describe('getOtherUsers', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const users = [];
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return users;
        }
      });
    });
    const dispatch = jest.fn();

    return getOtherUsers()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users?other=true`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getOtherUsersSuccess(users));
    });
  });
});

describe('putUserInfo', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const newUserData =  { id: 'fakeId'};
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return newUserData;
        }
      });
    });
    const dispatch = jest.fn();

    return putUserInfo(newUserData)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/fakeId`, {"body": "{\"id\":\"fakeId\"}", "headers": {"Authorization": "Bearer fake", "content-type": "application/json"}, "method": "PUT"} );
      expect(dispatch).toHaveBeenCalledWith(putUserInfoSuccess());
    });
  });
});