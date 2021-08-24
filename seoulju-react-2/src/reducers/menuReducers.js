const initialState = {
  menu: [],
  order: []
};

export default function menuItems(state = initialState, action){
  switch (action.type) {
    case 'FETCH_MENUITEMS':
      return {
        ...state,
        menu: action.payload,
      };
    case 'ORDER_DISH': //do these variables need to be const or let?? const is throwing err(investigate)
      let menu = [...state.menu];
      let dish = { ...action.payload.dish };
      let order = [...state.order];
      // //is that dish already in the order?
      const previouslyOrdered = order.find(
        (orderedItem) => orderedItem.id === dish.id
      );
      let newOrder = { ...dish, ordered: dish.ordered + 1  };

      // // if not, lets add it
      if (!previouslyOrdered) {
        order = [...order, { ...newOrder, ordered: 1 }];
      } else {
        previouslyOrdered.ordered++;
      }

      // //return state
      return { ...state, menu: menu, order: order };

    // let addedItem = state.menu.find(dish=> dish.id === action.id)
    //    //check if the id exists in the addedItems
    // let existsInOrder= state.order.find(item=> action.id === item.id)
    //    if (existsInOrder) {
    //      addedItem.quantity += 1;
    //      return {
    //        ...state,
    //        total: state.total + addedItem.price,
    //      };
    //    } else {
    //      addedItem.quantity = 1;
    //      //calculating the total
    //      let newTotal = state.total + addedItem.price;

    //      return {
    //        ...state,
    //        order: [...state.order, addedItem],
    //        total: newTotal,
    //      };
    //    }

    default:
      return state;
  }
};