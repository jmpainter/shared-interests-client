import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

export const initialState = 
{
  form: {},
  auth: {
    authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWI5NzJhNmMxZDRhNmI1YWNjMTQ1NTVjIiwiZmlyc3ROYW1lIjoiSm9zaCIsImxhc3ROYW1lIjoiUGFpbnRlciIsInNjcmVlbk5hbWUiOiJqb3NoIiwibG9jYXRpb24iOiJNaWxsIFZhbGxleSIsInVzZXJuYW1lIjoianBhaW50ZXI0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1MzgxNzAwMTIsImV4cCI6MTUzODc3NDgxMiwic3ViIjoianBhaW50ZXI0QGdtYWlsLmNvbSJ9.1Xo2tr5_x8J7H4WmM_H7w7Xjl5eQN-bQIykk8-1WXyk',
    currentUser: {
      id: '5b972a6c1d4a6b5acc14555c',
      firstName: 'Josh',
      lastName: 'Painter',
      screenName: 'josh',
      location: 'Mill Valley',
      username: 'jpainter4@gmail.com'
    },
    loading: false,
    error: null
  },
  user: {
    user: {
      id: '5b972a6c1d4a6b5acc14555c',
      firstName: 'Josh',
      lastName: 'Painter',
      screenName: 'josh',
      location: 'Mill Valley',
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
        },
        {
          _id: '5ba97ead0623ae3c80573f84',
          name: 'Backpacking (wilderness)'
        },
        {
          _id: '5ba97eb40623ae3c80573f86',
          name: 'Backpacking (travel)'
        },
        {
          _id: '5ba97f710623ae3c80573f88',
          name: 'Classical music'
        },
        {
          _id: '5ba9838f0623ae3c80573f8e',
          name: 'Mexican cuisine'
        },
        {
          _id: '5ba97f860623ae3c80573f8a',
          name: 'Frank Zappa'
        },
        {
          _id: '5bae7676fa2877484018748b',
          name: 'Gardening'
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
            _id: '5bad0f9eb7761b0ac8a1019a',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: '<p>Hi again</p>',
            date: '2018-09-27T17:13:02.904Z',
            __v: 0
          },
          {
            _id: '5bad0fb8b7761b0ac8a1019b',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: '<p>Hi Once more</p>',
            date: '2018-09-27T17:13:28.877Z',
            __v: 0
          },
          {
            _id: '5bad15dfb7761b0ac8a1019c',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: '<p>This is a <strong>new </strong>message with some <u>formatting </u>applied</p>',
            date: '2018-09-27T17:39:43.040Z',
            __v: 0
          },
          {
            _id: '5bad16a3b7761b0ac8a1019d',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5b995aeff77e9b16d0fb7635',
            text: '<p>Here is an attempt at a script &lt;script&gt;alert(\'hello\')&lt;/script&gt;</p>',
            date: '2018-09-27T17:42:59.734Z',
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
            _id: '5bac244570b0545c30ee1687',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: 'Hi there',
            date: '2018-09-27T00:28:53.409Z',
            __v: 0
          },
          {
            _id: '5bac3ccde2e1f85d04cea841',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>Hi again</p>',
            date: '2018-09-27T02:13:33.200Z',
            __v: 0
          },
          {
            _id: '5bac3f43e2e1f85d04cea842',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>One more hi</p>',
            date: '2018-09-27T02:24:03.407Z',
            __v: 0
          },
          {
            _id: '5bac43a2e2e1f85d04cea843',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>Another hi from Josh</p>',
            date: '2018-09-27T02:42:42.306Z',
            __v: 0
          },
          {
            _id: '5bac43b2e2e1f85d04cea844',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>Another hi from Josh 2</p>',
            date: '2018-09-27T02:42:58.032Z',
            __v: 0
          },
          {
            _id: '5bac43cde2e1f85d04cea845',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>Another hi from Josh 2</p>',
            date: '2018-09-27T02:43:25.582Z',
            __v: 0
          },
          {
            _id: '5bac43d7e2e1f85d04cea846',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>Another hi from Josh 6</p>',
            date: '2018-09-27T02:43:35.015Z',
            __v: 0
          },
          {
            _id: '5bac4494e2e1f85d04cea847',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>One more hi</p>',
            date: '2018-09-27T02:46:44.520Z',
            __v: 0
          },
          {
            _id: '5bac44ace2e1f85d04cea848',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>One more hi</p>',
            date: '2018-09-27T02:47:08.558Z',
            __v: 0
          },
          {
            _id: '5bac44d1e2e1f85d04cea849',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>One more hi 6</p>',
            date: '2018-09-27T02:47:45.239Z',
            __v: 0
          },
          {
            _id: '5bac4526e2e1f85d04cea84a',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>totally new message</p>',
            date: '2018-09-27T02:49:10.650Z',
            __v: 0
          },
          {
            _id: '5bac456de2e1f85d04cea84b',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>far out</p>',
            date: '2018-09-27T02:50:21.240Z',
            __v: 0
          },
          {
            _id: '5bac45fee2e1f85d04cea84c',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>henry</p>',
            date: '2018-09-27T02:52:46.865Z',
            __v: 0
          },
          {
            _id: '5bac4636e2e1f85d04cea84d',
            sender: {
              _id: '5b972a6c1d4a6b5acc14555c',
              screenName: 'josh',
              location: 'Mill Valley'
            },
            conversation: '5babe17679846a5ce079a185',
            text: '<p>autogen</p>',
            date: '2018-09-27T02:53:42.921Z',
            __v: 0
          },
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
  },
  misc: {
    latitude: null,
    longitude: null,
    mainMenuOpen: false,
    autoCompleteData: [],
    inputValue: '',
    editorState: {
      _cache: {},
      _editorState: {
        _immutable: {
          allowUndo: true,
          currentContent: {
            entityMap: {},
            blockMap: {
              bkldi: {
                key: 'bkldi',
                type: 'unstyled',
                text: '',
                characterList: [],
                depth: 0,
                data: {}
              }
            },
            selectionBefore: {
              anchorKey: 'bkldi',
              anchorOffset: 0,
              focusKey: 'bkldi',
              focusOffset: 0,
              isBackward: false,
              hasFocus: false
            },
            selectionAfter: {
              anchorKey: 'bkldi',
              anchorOffset: 0,
              focusKey: 'bkldi',
              focusOffset: 0,
              isBackward: false,
              hasFocus: false
            }
          },
          decorator: {
            _decorators: [
              {},
              {}
            ]
          },
          directionMap: {
            bkldi: 'LTR'
          },
          forceSelection: false,
          inCompositionMode: false,
          inlineStyleOverride: null,
          lastChangeType: null,
          nativelyRenderedContent: null,
          redoStack: [],
          selection: {
            anchorKey: 'bkldi',
            anchorOffset: 0,
            focusKey: 'bkldi',
            focusOffset: 0,
            isBackward: false,
            hasFocus: false
          },
          treeMap: {
            bkldi: [
              {
                start: 0,
                end: 0,
                decoratorKey: null,
                leaves: [
                  {
                    start: 0,
                    end: 0
                  }
                ]
              }
            ]
          },
          undoStack: []
        }
      }
    }
  }
}