import {
  addMessageSuccess,
  addMessage
} from './messages';

import { API_BASE_URL } from '../config';

describe('addMessage', () => {
  it('Should dispatch addMessageSuccess', () => {
    const interests = [];
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return interests;
        }
      });
    });
    const dispatch = jest.fn();
    // mock getState to return authtoken for authorization header in async action creator        
    const getState = () => ({ auth: { authToken: 'fake' }});
    // call the function returned from the async action creator    
    return addMessage('fakeId', 'text')(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/conversations/fakeId/messages`, {"body": "{\"id\":\"fakeId\",\"text\":\"text\"}", "headers": {"Authorization": "Bearer fake", "Content-Type": "application/json"}, "method": "POST"} );
      expect(dispatch).toHaveBeenCalledWith(addMessageSuccess());
    });
  });
});