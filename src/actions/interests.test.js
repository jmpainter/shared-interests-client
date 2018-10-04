import {
  addInterestSuccess,
  addInterest,
  deleteInterestSuccess,
  deleteInterest,
  getLatestInterestsSuccess,
  getLatestInterests
} from './interests';

import { API_BASE_URL } from '../config';

describe('addInterest', () => {
  it('Should dispatch addInterestSuccess', () => {
    const interest = {
      wikiPageId: 43353,
      name: 'baseball'
    }
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
    
    return addInterest(interest)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/interests`, {"body": "{\"wikiPageId\":\"43353\",\"name\":\"baseball\"}", "headers": {"Authorization": "Bearer fake", "Content-Type": "application/json"}, "method": "POST"} );
      expect(dispatch).toHaveBeenCalledWith(addInterestSuccess());
    });
  });
});

describe('deleteInterest', () => {
  it('Should dispatch deleteInterestSuccess', () => {
    const id = 'fake';
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });
    const dispatch = jest.fn();
    
    return deleteInterest(id)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/interests/fake`, {"headers": {"Authorization": "Bearer fake"}, "method": "DELETE"} );
      expect(dispatch).toHaveBeenCalledWith(deleteInterestSuccess());
    });
  });
});

describe('getLatestInterests', () => {
  it('Should dispatch getLatestInterestsSuccess', () => {
    const interests = [];
    // mocking getState
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return interests;
        }
      });
    });
    const dispatch = jest.fn();
    
    return getLatestInterests()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/interests`, {"method": "GET"} );
      expect(dispatch).toHaveBeenCalledWith(getLatestInterestsSuccess(interests));
    });
  });
});