const initialState = {
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
  topInterest: 'Gardening',
  numInterests: 45
}

export const surveyReducer = (state = initialState, action) => {
  return state;
}