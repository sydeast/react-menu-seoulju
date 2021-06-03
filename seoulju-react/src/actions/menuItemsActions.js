export const FETCH_MENUITEMS = 'FETCH_MENUITEMS';



export function fetchMenuItems( menuItems ){
  return {

    type: FETCH_MENUITEMS,
    menuItems:  menuItems
  }
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
