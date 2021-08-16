import fetchMenu from "../actions/fetchMenu";

const initialState = {
  menu: {},
  loading: false,
  error: null,
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        menu: action.payload,
      };

    default:
      return state;
  }
}
export const menuItems = (state) => state.menu;