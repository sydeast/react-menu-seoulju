import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import rootReducer from './reducers/rootReducer';
import menuItems from './reducers/menuReducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [ thunk, logger]
const middlewareEnhancer = applyMiddleware(...middlewares)

const store = createStore(
  menuItems,
  composeWithDevTools(applyMiddleware(...middlewares))

);

export default store;