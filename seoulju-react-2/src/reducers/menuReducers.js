const initialState = {
  menu: [],
  order: [],
  filter: []
};

export default function menuItems(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        ...state,
        menu: action.payload,
      };
    case 'ORDER_DISH': //do these variables need to be const or let?? const is throwing err(investigate)
      // Attempt #1 (works with just the dish item payload, but messy)
      // let menu = [...state.menu];
      // let dish = { ...action.payload.dish };
      // let order = [...state.order];
      // // //is that dish already in the order?
      // // // if not, lets add it
      // const previouslyOrdered = order.find(
      //   (orderedItem) => orderedItem.id === dish.id
      // );
      // let newOrder = { ...dish, ordered: dish.ordered + 1 };
      // if (!previouslyOrdered) {
      //   order = [...order, { ...newOrder, ordered: 1 }];
      // } else {
      //   previouslyOrdered.ordered++;
      // }

      // // //return state
      // return { ...state, menu: menu, order: order };

      //Attempt #2 (works, cleaner)
      const item = state.menu.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const previouslyOrdered = state.order.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        order: previouslyOrdered
          ? state.order.map((item) =>
              item.id === action.payload.id
                ? { ...item, ordered: item.ordered + 1 }
                : item
            )
          : [...state.order, { ...item, ordered: 1 }],
      };

    case 'UPDATE_ORDER':
      return {
        ...state,
        order: state.order.map((item) =>
          item.id === action.payload.id
            ? { ...item, ordered: +action.payload.ordered }
            : item
        ),
      };

    //use .filter (easier to remove entire dish item from array)
    case 'REMOVE_FROM_ORDER':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.id),
      };

    // case 'EDIT_DISH':
    // return {
    //   ...state,
    //   menu: action.payload
    // };

    case 'REMOVED_FROM_MENU':
      let deleteIndex = state.filter.findIndex((dish) => action.payload.id === dish.id)
        return {
          ...state,
          menu: state.menu.concat(action.payload),
          filter: [...state.filter.slice(0, deleteIndex).concat(...state.filter.slice(deleteIndex+1, state.filter.length+1))],
        };

    case 'ADD_TO_MENU':
      return {
        ...state,
        menu: action.payload,
      };

    case 'FILTER_BY_CATEGORY':
      if (action.payload.category === 'All') {
        return {
          ...state,
          filter: state.menu
        }
      } else {
        return {
          ...state,
          filter: state.menu.filter(
            (item) => item.category === action.payload.category
          ),
        }
      };

    default:
      return state;
  }
}
