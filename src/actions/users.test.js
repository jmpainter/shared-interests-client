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

import {API_BASE_URL} from '../config';

describe('registerUser', () => {
  it('Should call fetch /users the action', () => {
    const user = {};
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return { user }
        }
      });
    });
    const dispatch = jest.fn();
    // call the function returned from the async action creator
    return registerUser(user)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`,  {"body": "{}", "headers": {"content-type": "application/json"}, "method": "POST"});
    });
  });
});

describe('getUserInfo', () => {
  it('Should dispatch getUserInfoSuccess', () => {
    const user = {};
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return user;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator        
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
    return getUserInfo()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getUserInfoSuccess(user));
    });
  });
});

describe('getInterestMatches', () => {
  it('Should dispatch getInterestMatchesSuccess', () => {
    const matches = [];
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return matches;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator    
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
    return getInterestMatches()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users?interests=true`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getInterestMatchesSuccess(matches));
    });
  });
});

describe('getOtherUser', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const otherUser = {};
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return otherUser;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator        
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator
    return getOtherUser('fakeId')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/fakeId`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getOtherUserSuccess(otherUser));
    });
  });
});

describe('getNearbyUsers', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const users = [];
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return users;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator    
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
    return getNearbyUsers()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users?nearby=true`, {"headers": {"Authorization": "Bearer fake"}, "method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getNearbyUsersSuccess(users));
    });
  });
});

describe('getOtherUsers', () => {
  it('Should dispatch getOtherUserSuccess', () => {
    const users = [];
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return users;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator    
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
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
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return newUserData;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator        
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
    return putUserInfo(newUserData)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/fakeId`, {"body": "{\"id\":\"fakeId\"}", "headers": {"Authorization": "Bearer fake", "content-type": "application/json"}, "method": "PUT"} );
      expect(dispatch).toHaveBeenCalledWith(putUserInfoSuccess());
    });
  });
});