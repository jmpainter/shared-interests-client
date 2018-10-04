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
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return data
        }
      });
    });
    const dispatch = jest.fn();

    return getConversations()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/conversations`,  {"headers": {"Authorization": "Bearer fake"}, "method": "GET"});
      expect(dispatch).toHaveBeenCalledWith(getConversationsSuccess([]));   
    });
  });
});

describe('addConvseration', () => {
  it('Should dispatch addConversationSuccess', () => {
    const data = { conversations: [] };
    const getState = () => ({ auth: { authToken: 'fake' }});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return data
        }
      });
    });
    const dispatch = jest.fn();

    return addConversation('fakeId')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/conversations`,  {"body": "{\"recipient\":\"fakeId\"}", "headers": {"Authorization": "Bearer fake", "Content-Type": "application/json"}, "method": "POST"});
      expect(dispatch).toHaveBeenCalledWith(addConversationSuccess([]));   
    });
  });
});

