import { combineReducers, createStore } from 'redux';
import { userReducer, conversationsReducer, surveyReducer } from './reducers';

const combinedReducer = combineReducers({
  user: userReducer,
  conversations: conversationsReducer,
  survey: surveyReducer
});

export default createStore(combinedReducer);