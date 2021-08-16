const initialState = {
  menu: [],
  loading: false,
  error: null,
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        ...state,
        menu: action.payload
      };

    default:
      return state;
  }
}
