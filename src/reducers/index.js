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
        id: 43,
        user: {
          id: 2,
          screenName: 'sally4',
          location: 'Oakland, CA',
          interests: [
            {
              id: 8,
              name: 'Italian Cooking'
            },      
            {
              id: 51,
              name: 'Bowling'
            },  
            {
              id: 61,
              name: 'Salami'
            } 
          ]
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
        id: 44,
        user: {
          id: 3,
          screenName: 'russer',
          location: 'New York, NY',
          interests: [
            {
              id: 8,
              name: 'Italian Cooking'
            },      
            {
              id: 51,
              name: 'Bowling'
            },  
            {
              id: 61,
              name: 'Salami'
            } 
          ]
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
        id: 8,
        name: 'Italian Cooking'
      },
      {
        userId: 3,
        screenName: 'russer',
        id: 3,
        name: 'Mountain Biking'
      }  
    ]
  },
  latestInterests: [
    {
      id: 9,
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
      id: 22,
      name: 'Bunnies',
      users: [
        {
          id: 14,
          screenName: 'rayBunny'
        }    
      ]
    },
    {
      id: 23,
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
    }
  ],
  interestMatches: [
    {
      id: 3,
      name: 'Mountain biking',
      users: [
        {
          id: 34,
          screenName: 'dennyA'
        },
        {
          id: 13,
          screenName: 'ray'
        }        
      ]
    },
    {
      id: 4,
      name: 'Italian Cooking',
      users: [
        {
          id: 2,
          screenName: 'sueD'
        }    
      ]
    },
    {
      id: 23,
      name: 'Gardening',
      users: [
        {
          id: 2,
          screenName: 'henry4'
        },
        {
          id: 33,
          screenName: 'rose'
        }          
      ]
    }
  ]
};

export const sharedInterestsReducer = (state = initialState, action) => {
  return state;
}