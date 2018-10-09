// project requirements for component testing: 
// smoke tests,
// component rendering based on props and state,
// testing callbacks and events

import React from 'react';
import { shallow, mount } from 'enzyme';

import { Profile } from './Profile';

// Replace the async actions with mocked synchronous versions to test againsts
const mockGetUserInfo = {
  type: 'GET_USER_INFO'
};
const mockGetInterestMatches = {
  type: 'GET_INTEREST_MATCHES'
};
const mockGetConversations = {
  type: 'GET_CONVERSATIONS'
};
const mockGetNearbyUsers = {
  type: 'GET_NEARBY_USERS'
};
const mockGetOtherUsers = {
  type: 'GET_OTHER_USERS'
};

jest.mock('../actions/users', () => Object.assign({},
  require.requireActual('../actions/users'),
  {
    getUserInfo: jest.fn().mockImplementation(() => {
        return mockGetUserInfo;
    })
  },
  {
    getInterestMatches: jest.fn().mockImplementation(() => {
        return mockGetInterestMatches;
    })
  },
  {
    getNearbyUsers: jest.fn().mockImplementation(() => {
        return mockGetNearbyUsers;
    })
  },
  {
    getOtherUsers: jest.fn().mockImplementation(() => {
        return mockGetOtherUsers;
    })
  }
));

jest.mock('../actions/conversations', () => Object.assign({},
  require.requireActual('../actions/conversations'),
  {
    getConversations: jest.fn().mockImplementation(() => {
        return mockGetConversations;
    })
  }
));

describe('<Profile />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Profile dispatch={dispatch} />);
  });

  it('Gets all the user updates when mounted', () => {
    const dispatch = jest.fn();
    shallow(<Profile dispatch={dispatch} loggedIn={true} />);
    // expect all of the mocked functions to have been called in componentDidMount
    expect(dispatch).toHaveBeenCalledWith(mockGetUserInfo);
    expect(dispatch).toHaveBeenCalledWith(mockGetInterestMatches);
    expect(dispatch).toHaveBeenCalledWith(mockGetConversations);
    expect(dispatch).toHaveBeenCalledWith(mockGetNearbyUsers);
    expect(dispatch).toHaveBeenCalledWith(mockGetOtherUsers);
  });
});
