import {
  getConversationsSuccess,
  getConversations,
  addConversationSuccess,
  addConversation
} from './conversations';

import {API_BASE_URL} from '../config';

describe('getConversations', () => {
  it('Should dispatch getConversationsSuccess', () => {
    const data = { conversations: [] };
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return data
        }
      });
    });
    const dispatch = jest.fn();
    
    // mock getState to return authtoken for authorization header in async action creator
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator
    return getConversations()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/conversations`,  {"headers": {"Authorization": "Bearer fake"}, "method": "GET"});
      expect(dispatch).toHaveBeenCalledWith(getConversationsSuccess([]));   
    });
  });
});

describe('addConvseration', () => {
  it('Should dispatch addConversationSuccess', () => {
    const data = { conversations: [] };
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return data
        }
      });
    });
    const dispatch = jest.fn();
    
    // mock getState to return authtoken for authorization header in async action creator
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
    return addConversation('fakeId')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/conversations`,  {"body": "{\"recipient\":\"fakeId\"}", "headers": {"Authorization": "Bearer fake", "Content-Type": "application/json"}, "method": "POST"});
      expect(dispatch).toHaveBeenCalledWith(addConversationSuccess([]));   
    });
  });
});

