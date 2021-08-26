// import {  FETCH_MENUITEMS} from '../actions/menuItemsActions';
import fetchMenu from '../actions/fetchMenu';
import {ADD_DISH, UPDATE_DISH} from '../actions/menuActions';

const initialState = {
  menu: {},
  loading: false,
  error: null,
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        menu: action.payload
      };

    case 'ADD_DISH':
      return {
        ...state,
        menu:  action.newMenuItem,
      };
    case UPDATE_DISH:
      return {
        ...state,
        menu: action.updateMenuItem,
      };
    default:
      return state;
  }
}
 export const getMenuItems = (state) => state.menu;
