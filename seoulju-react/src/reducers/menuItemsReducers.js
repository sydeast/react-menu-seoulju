import {
  FETCH_MENUITEMS_BEGIN,
  FETCH_MENUITEMS_SUCCESS,
  FETCH_MENUITEMS_FAILURE,
} from '../actions/menuItemsActions';

const initialState = {
  menu: {},
  loading: false,
  error: null,
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENUITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MENUITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        menu: action.menuItems,
      };

    case FETCH_MENUITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
        // menu: [],
      };

    default:
      return state;
  }
}
 export const getMenuItems = (state) => state.menu;
 export const getMenuItemsPending = (state) => state.pending;
 export const getMenuItemsError = (state) => state.error;