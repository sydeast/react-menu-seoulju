import { combineReducers } from 'redux';
import menuItemsReducer from './menuReducers';

export default combineReducers({
  menu: menuItemsReducer,
});