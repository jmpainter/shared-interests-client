const initialState = 
[
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
  }
]

  export const conversationsReducer = (state = initialState, action) => {
    return state;
  }