export const SET_COORDINATES = 'SET_COORDINATES';
export const setCoordinates = coordinates => {
  console.log('from action: ' + coordinates.lat);
    return ({
    type: SET_COORDINATES,
    latitude: coordinates.lat,
    longitude: coordinates.lng
  });
}
