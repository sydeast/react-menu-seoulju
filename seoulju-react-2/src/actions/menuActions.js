// API call to get the menu
export const fetchMenu = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/menus')
      .then((res) => res.json())
      .then(data => {
        const menuItems = data.map((dish) => ({
          ...dish,
          ordered: 0,
        }));
        dispatch({
          type: 'FETCH_MENUITEMS',
          payload: menuItems,
        });
      })
      .catch((error) => console.log("error", error));

  };
}

//API call to edit dish item
// export const editDish = (id, dish) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/api/v1/menus/${id}`, {
//         method: "PATCH",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify({ dish }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           dispatch({
//             type: 'UPDATE_DISH',
//             payload: data
//           });
//         })
//       .catch((error) => console.log('error', error));
//   };
// };

//Order and Cart Actions
export const addToOrder = (dishID) => {
  return {
    type: 'ORDER_DISH',
    payload: {
      id: dishID
    }
  };
}

export const updateOrder = (dishID, ordered) => {
  return {
    type: 'UPDATE_ORDER',
    payload: {
      id: dishID,
      ordered
    },
  };
};

export const removeFromOrder = (dishID) => {
  return {
    type: 'REMOVE_FROM_ORDER',
    payload: {
      id: dishID,
    },
  };
};