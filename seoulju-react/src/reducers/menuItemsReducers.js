import {
  FETCH_MENUITEMS
} from '../actions/menuItemsActions';
import {ADD_DISH, UPDATE_DISH} from '../actions/menuActions';

const initialState = {
  menu: {},
  loading: false,
  error: null,
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENUITEMS:
      return {
        ...state,
        loading: false,
        menu: action.menuItems,
      };

    case ADD_DISH:
      return {
        ...state,
        menu: [...state.menu, action.newMenuItem],
      };
    case UPDATE_DISH:
      return {
        ...state,
        [action.menu.id]: action.menu.dishProps
      };
    default:
      return state;
  }
}
 export const getMenuItems = (state) => state.menu;
