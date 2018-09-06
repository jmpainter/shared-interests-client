const initialState = {
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
  interestMatches: [
    {
      id: 3,
      name: 'Mountain Biking',
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
      id: 30,
      name: 'Jazz Music',
      users: [
        {
          id: 14,
          screenName: 'rayBunny'
        }    
      ]
    },
    {
      id: 8,
      name: 'Italian Cooking',
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
};

export const userReducer = (state = initialState, action) => {
  return state;
}