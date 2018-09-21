export const SET_COORDINATES = 'SET_COORDINATES';
export const setCoordinates = coordinates => ({
  type: SET_COORDINATES,
  latitude: coordinates.lat,
  longitude: coordinates.lng
});

export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
export const toggleMainMenu = () => ({
  type: TOGGLE_MAIN_MENU
});