const initialState = {
  menu: [],
  order:[]
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        menu: action.payload,
      };
    case 'ORDER_DISH': //do these variables need to be const or let?? const is throwing err(investigate)
      let menu = [...state.menu];
      let dish = { ...action.payload.dish };
      let order = [...state.order];
      //is that dish already in the order?
      // if not, lets add it
      //return state
      return { ...state, menu: menu, order: order };

    default:
      return state;
  }
}
