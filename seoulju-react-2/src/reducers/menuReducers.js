const initialState = {
  menu: [],
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        menu: action.payload
      };

    default:
      return state;
  }
}
