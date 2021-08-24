import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import logger from 'redux-logger';



// import rootReducer from './reducers/rootReducer';
import menuItems from './reducers/menuReducers';

export function configureStore(preloadedState) {
  // const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewares = [loggerMiddleware, thunkMiddleware, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(menuItems, preloadedState, composedEnhancers);

  return store
};
