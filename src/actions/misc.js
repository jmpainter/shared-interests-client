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

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
}

export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  };
}

export const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
export const maybeUpdateSuggestions = (suggestions, value) => {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
}

export const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';
export const loadSuggestionsBegin = () => {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  };
}

export const loadSuggestions = value => dispatch => {
  dispatch(loadSuggestionsBegin());

  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=${value}`

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      dispatch(maybeUpdateSuggestions(myJson.query.search, value));
    })
    .catch(err => console.error(err));
}

export const SET_EDITOR_STATE = 'SET_EDITOR_STATE';
export const setEditorState = value => ({
  type: SET_EDITOR_STATE,
  value
});