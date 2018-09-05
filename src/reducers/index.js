const initialState = {
  user: {
    firstName: 'Josh',
    lastName: 'Painter',
    interests: [
      {
        id: 3,
        name: 'Mountain Biking'
      },
      {
        id: 6,
        name: 'Cross Country Skiing'
      },
      {
        id: 8,
        name: 'Italian Cooking'
      },
      {
        id: 30,
        name: 'Jazz Music'
      }            
    ],
    conversations: [
      {
        id: 45,
        user: {
          id: 2,
          screenName: 'sally4'
        },
        messages: [
          {
            userId: 1,
            screenName: 'joshp',
            date: '10/10/2017',
            content: 'Hi, I see you like gardening'
          },
          {
            userId: 2,
            screenName: 'sally4',          
            date: '10/10/2017',
            content: 'Yes, I really do'
          },
          {
            userId: 1,
            screenName: 'joshp',
            date: '10/10/2017',
            content: 'What kinds do you like to plant?'
          }      
        ]
      },
      {
        id: 46,
        user: {
          id: 3,
          screenName: 'russer'
        },
        messages: [
          {
            userId: 3,
            screenName: 'russer',
            date: '10/20/2017',
            content: 'What kind of biking do you have there?'
          },
          {
            userId: 1,
            screenName: 'joshp',
            date: '10/21/2017',
            content: 'Road and mountain.'
          },
          {
            userId: 3,
            screenName: 'russer',
            date: '10/22/2017',
            content: 'How good is it?'
          }   
        ]
      },
    ],
    interestMatches: [
      {
        userId: 2,
        screenName: 'sally4',
        interestId: 8,
        name: 'Italian Cooking'
      },
      {
        userId: 3,
        screenName: 'russer',
        interestId: 3,
        name: 'Mountain Biking'
      }  
    ]
  },
  latestInterests: [
    {
      interestId: 9,
      name: 'Astronomy',
      users: [
        {
          id: 6,
          screenName: 'denny4'
        },
        {
          id: 13,
          screenName: 'stars'
        }        
      ]
    },
    {
      interestId: 22,
      name: 'Bunnies',
      users: [
        {
          id: 14,
          screenName: 'rayBunny'
        }    
      ]
    },
    {
      interestId: 23,
      name: 'Dune Buggies',
      users: [
        {
          id: 6,
          screenName: 'denny4'
        },
        {
          id: 40,
          screenName: 'roger12'
        },
        {
          id: 44,
          screenName: 'sandyb'
        }             
      ]
    },    
  ]
};

export const sharedInterestsReducer = (state = initialState, action) => {
  return state;
}