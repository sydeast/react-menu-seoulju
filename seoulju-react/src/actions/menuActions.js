export const ADD_DISH = 'ADD_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';

const addDish = newDish => {
  return {
    type: 'ADD_DISH',
    newDish,
  }
};

// const editDish = (dishProps) => {
//   return {
//     type: 'UPDATE_DISH',
//     dishProps,
//   };
// };

export const createNewDish = newDish => dispatch => {
    fetch(`http://localhost:3001/api/v1/menus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( newDish ),
    })
      .then((resp) => resp.json())
      .then((newDish) => {
        dispatch(addDish(newDish));
      })
      .catch((error) => console.log(error));
  };

  export const updateDish = (id, dishProps) => (dispatch) => {

    fetch(`http://localhost:3001/api/v1/menus/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dishProps),
    })
      .then((resp) => resp.json())
      .then((dishProps) => {
        debugger
      })
      // .then()
      .catch((error) => console.log(error));
  };

  // export const deleteDish = (id, dishProps) => (dispatch) => {
  //   fetch(`http://localhost:3001/api/v1/menus`, {
  //     method: 'DESTROY',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(dishProps),
  //   })
  //     .then((resp) => resp.json())
  //     .then((dishProps) => {
  //       debugger
  //     })
  //     // .then((dish) => {
  //     //   dispatch(deleteDish(dish));
  //     // })
  //     .catch((error) => console.log(error));
  // };

// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
