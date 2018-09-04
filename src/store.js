import { createStore } from 'redux';
import { sharedInterestsReducer } from './reducers';

export default createStore(sharedInterestsReducer);