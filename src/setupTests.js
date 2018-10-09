import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

// This export of an example redux state is used in 
// different portions for tests
export const initialState = 
{
  form: {},
  auth: {
    authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWJiNTczY2I0NGYyNDkzNjU4OTAxYmUwIiwiZmlyc3ROYW1lIjoiU2FtIiwibGFzdE5hbWUiOiJSZXlub2xkcyIsInNjcmVlbk5hbWUiOiJzcmVub2xkcyIsImxvY2F0aW9uIjoiQmVya2VsZXksIENBLCBVU0EiLCJ1c2VybmFtZSI6InNhbUBnbWFpbC5jb20ifSwiaWF0IjoxNTM4NjE4Mzc3LCJleHAiOjE1MzkyMjMxNzcsInN1YiI6InNhbUBnbWFpbC5jb20ifQ.2RqwJPuOmvPb5k4T-9HoEYfH4-AyLNGQwqjM43Bu11o',
    currentUser: {
      id: '5b972a6c1d4a6b5acc14555c',
      firstName: 'Sam',
      lastName: 'Reynolds',
      screenName: 'sreynolds',
      location: 'San Rafael',
      username: 'sam@gmail.com'
    },
    loading: false,
    error: null
  },
  user: {
    user: {
      id: '5b972a6c1d4a6b5acc14555c',
      firstName: 'Sam',
      lastName: 'Reynolds',
      screenName: 'sreynolds',
      location: 'San Rafael',
      interests: [
        {
          _id: '5b9beb7f016c7837a0e36f30',
          name: 'Mountain Biking'
        },
        {
          _id: '5ba97d330623ae3c80573f80',
          name: 'Scuba diving'
        },
        {
          _id: '5ba97e970623ae3c80573f82',
          name: 'Jazz'
        }
      ],
      blockedUsers: []
    },
    interestMatches: [
      {
        interest: 'Mountain Biking',
        users: [
          {
            _id: '5b9881ec8b887645bc2454a0',
            firstName: 'Amy',
            lastName: 'Walker',
            screenName: 'amy',
            location: 'Larkspur',
            username: 'amy2@gmail.com'
          }
        ]
      },
      {
        interest: 'Mexican cuisine',
        users: [
          {
            _id: '5b9881ec8b887645bc2454a0',
            firstName: 'Amy',
            lastName: 'Walker',
            screenName: 'amy',
            location: 'Larkspur',
            username: 'amy2@gmail.com'
          }
        ]
      }
    ],
    nearbyUsers: [
      {
        id: '5b9881ec8b887645bc2454a0',
        screenName: 'amy',
        location: 'Larkspur',
        distance: 2.0101695927760246
      },
      {
        id: '5ba45dd712578b538c5d4257',
        screenName: 'sworth',
        location: 'San Rafael, CA, USA',
        distance: 4.726125420978874
      }
    ],
    meetUser: {
      interests: []
    },
    otherUsers: [
      {
        interest: 'Spanish language',
        users: [
          {
            _id: '5ba45dd712578b538c5d4257',
            firstName: 'Sally',
            lastName: 'Worth',
            screenName: 'sworth',
            location: 'San Rafael, CA, USA',
            username: 'sally@gmail.com'
          }
        ]
      },
      {
        interest: 'Tennis',
        users: [
          {
            _id: '5ba45dd712578b538c5d4257',
            firstName: 'Sally',
            lastName: 'Worth',
            screenName: 'sworth',
            location: 'San Rafael, CA, USA',
            username: 'sally@gmail.com'
          }
        ]
      },
      {
        interest: 'Reading',
        users: [
          {
            _id: '5ba45dd712578b538c5d4257',
            firstName: 'Sally',
            lastName: 'Worth',
            screenName: 'sworth',
            location: 'San Rafael, CA, USA',
            username: 'sally@gmail.com'
          }
        ]
      },
      {
        interest: 'Major League Baseball',
        users: [
          {
            _id: '5ba45dd712578b538c5d4257',
            firstName: 'Sally',
            lastName: 'Worth',
            screenName: 'sworth',
            location: 'San Rafael, CA, USA',
            username: 'sally@gmail.com'
          }
        ]
      }
    ],
    error: null
  },
  conversations: {
    conversations: [
      {
        users: [
          {
            _id: '5b972a6c1d4a6b5acc14555c',
            screenName: 'josh',
            location: 'Mill Valley'
          },
          {
            _id: '5b9881ec8b887645bc2454a0',
            screenName: 'amy',
            location: 'Larkspur'
          }
        ],
        messages: [
          {
            _id: '5b995b13f77e9b16d0fb7636',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: 'Hello there',
            date: '2018-09-12T18:29:39.577Z',
            __v: 0
          },
          {
            _id: '5bad1765b7761b0ac8a1019e',
            sender: {
              _id: '5b9881ec8b887645bc2454a0',
              screenName: 'amy',
              location: 'Larkspur'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: '<p>This is a reply from amy</p>',
            date: '2018-09-27T17:46:13.469Z',
            __v: 0
          },
          {
            _id: '5bad1796b7761b0ac8a1019f',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: '<p>Another message from Josh</p>',
            date: '2018-09-27T17:47:02.567Z',
            __v: 0
          }
        ],
        _id: '5b995aeff77e9b16d0fb7635',
        __v: 7
      },
      {
        users: [
          {
            _id: '5b972a6c1d4a6b5acc14555c',
            screenName: 'josh',
            location: 'Mill Valley'
          },
          {
            _id: '5ba45dd712578b538c5d4257',
            screenName: 'sworth',
            location: 'San Rafael, CA, USA'
          }
        ],
        messages: [
          {
            _id: '5bac468ce2e1f85d04cea84e',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>hello</p>',
            date: '2018-09-27T02:55:08.673Z',
            __v: 0
          }
        ],
        _id: '5babe17679846a5ce079a185',
        __v: 17
      }
    ],
    currentConversation: null,
    error: null
  },
  interests: {
    error: null,
    latestInterests: [
      {
        _id: '5bae7676fa2877484018748b',
        wikiPageId: '11984',
        name: 'Gardening',
        __v: 0
      },
      {
        _id: '5bae75f3fa28774840187489',
        wikiPageId: '147313',
        name: 'Hiking',
        __v: 0
      },
      {
        _id: '5bad2ac186671f4294d899bb',
        wikiPageId: '38776',
        name: 'Major League Baseball',
        __v: 0
      },
      {
        _id: '5bad2ab686671f4294d899b9',
        wikiPageId: '233067',
        name: 'Reading',
        __v: 0
      },
      {
        _id: '5bad2aad86671f4294d899b7',
        wikiPageId: '29773',
        name: 'Tennis',
        __v: 0
      },
      {
        _id: '5bad2aa586671f4294d899b5',
        wikiPageId: '26825',
        name: 'Spanish language',
        __v: 0
      }
    ]
  }
}