export const FETCH_MENUITEMS_BEGIN = 'FETCH_MENUITEMS_BEGIN';
export const FETCH_MENUITEMS_SUCCESS = 'FETCH_MENUITEMS_SUCCESS';
export const FETCH_MENUITEMS_FAILURE = 'FETCH_MENUITEMS_FAILURE';

export function fetchMenuItemsBegin(){
  return {
    type: FETCH_MENUITEMS_BEGIN,
  }
};

export function fetchMenuItemsSuccess( menuItems ){
  return {

    type: FETCH_MENUITEMS_SUCCESS,
    menuItems:  menuItems
  }
};

export function fetchMenuItemsFailure(error){
  return {
    type: FETCH_MENUITEMS_FAILURE,
    error: error,
  };
};

// export function addNewDish(newFoodItem) {
//   return {
//     type: ADD_NEW_DISH,
//     menuItems: newFoodItem
//   };
// };

// export function updateDish(key, updateMenuItem) {
//   return {
//     type: UPDATE_DISH,
//     menuItems[key]: updateMenuItem
//   };
// };

// export function deleteDish(itemId, key) {
//   return {
//     type: DELETE_DISH,
//   };
// };


// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
