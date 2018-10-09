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

// Redux devtools must be installed in the browser if the Redux devtools compose function
// is used. Therefore, composeEnhancers detects whether it is present and uses
// the correct compose function.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    conversations: conversationsReducer,
    interests: interestsReducer,
    misc: miscReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// apply the authToken from localStorage if it exists
const authToken = loadAuthToken();
if(authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;