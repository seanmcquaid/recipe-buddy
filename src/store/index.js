import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user/reducer';
import loadingReducer from './loading/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export default configureStore;
