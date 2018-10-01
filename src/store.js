import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import { 
  authReducer,
  userReducer,
  conversationsReducer,
  miscReducer,
  interestsReducer } from './reducers';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const middleware = applyMiddleware(thunk);

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    conversations: conversationsReducer,
    interests: interestsReducer,
    misc: miscReducer
  }),
  compose(middleware,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// apply the authToken from localStorage if it exists
const authToken = loadAuthToken();
if(authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;