import {
  SET_COORDINATES,
  setCoordinates,
  TOGGLE_MAIN_MENU,
  toggleMainMenu,
  UPDATE_INPUT_VALUE,
  updateInputValue,
  CLEAR_SUGGESTIONS,
  clearSuggestions,
  MAYBE_UPDATE_SUGGESTIONS,
  maybeUpdateSuggestions,
  LOAD_SUGGESTIONS_BEGIN,
  loadSuggestionsBegin,
  loadSuggestions,
  SET_EDITOR_STATE,
  setEditorState
} from './misc';

describe('setCoordinates', () => {
  it('Should return the action', () => {
    const coordinates = {lat: 423, lng: 321}
    const action = setCoordinates(coordinates);
    expect(action.type).toEqual(SET_COORDINATES);
    expect(action.latitude).toEqual(coordinates.lat);
    expect(action.longitude).toEqual(coordinates.lng);
  });
});

describe('updateInputValue', () => {
  it('Should return the action', () => {
    const value = '';
    const action = updateInputValue(value);
    expect(action.type).toEqual(UPDATE_INPUT_VALUE);
    expect(action.value).toEqual(value);
  });
});

describe('clearSuggestions', () => {
  it('Should return the action', () => {
    const action = clearSuggestions();
    expect(action.type).toEqual(CLEAR_SUGGESTIONS);
  });
});

describe('maybeUpdateSuggestions', () => {
  it('Should return the action', () => {
    const suggestions = [];
    const value = '';
    const action = maybeUpdateSuggestions(suggestions, value);
    expect(action.type).toEqual(MAYBE_UPDATE_SUGGESTIONS);
    expect(action.suggestions).toEqual(suggestions);
    expect(action.value).toEqual(value);
  });
});
  
describe('loadSuggestionsBegin', () => {
  it('Should return the action', () => {
    const action = loadSuggestionsBegin();
    expect(action.type).toEqual(LOAD_SUGGESTIONS_BEGIN);
  });
});

describe('toggleMainMenu', () => {
  it('Should return the action', () => {
    const action = toggleMainMenu();
    expect(action.type).toEqual(TOGGLE_MAIN_MENU);
  });
});


describe('setEditorState', () => {
  it('Should return the action', () => {
    const value = {};
    const action = setEditorState(value);
    expect(action.type).toEqual(SET_EDITOR_STATE);
    expect(action.value).toEqual(value);
  });
});

describe('loadSuggestions', () => {
  it('Should dispatch loadSuggestionsBegin and maybeUpdateSuggestions', () => {
    const result = { query: {search: []}};
    // mock the call to fetch so test can run without request to api
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return result;
        }
      });
    });
    const dispatch = jest.fn();
    debugger;
    // call the function returned from the async action creator
    return loadSuggestions('abc')(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=abc');
      expect(dispatch.mock.calls).toEqual([
        [loadSuggestionsBegin()], // First call
        [maybeUpdateSuggestions([], 'abc')]  // Second call
      ]);
    });
  });
});
