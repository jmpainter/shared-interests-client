import {
  SET_COORDINATES,
  setCoordinates,
  TOGGLE_MAIN_MENU,
  toggleMainMenu,
  SET_AUTO_COMPLETE_DATA,
  setAutoCompleteData,
  SET_INPUT_VALUE,
  setInputValue,
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

describe('toggleMainMenu', () => {
  it('Should return the action', () => {
    const action = toggleMainMenu();
    expect(action.type).toEqual(TOGGLE_MAIN_MENU);
  });
});

describe('setAutoCompleteData', () => {
  it('Should return the action', () => {
    const data = {};
    const action = setAutoCompleteData(data);
    expect(action.type).toEqual(SET_AUTO_COMPLETE_DATA);
    expect(action.data).toEqual(data);
  });
});

describe('setInputValue', () => {
  it('Should return the action', () => {
    const value = {};
    const action = setInputValue(value);
    expect(action.type).toEqual(SET_INPUT_VALUE);
    expect(action.value).toEqual(value);
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
