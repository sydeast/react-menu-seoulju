import {
  fetchMenuItemsBegin,
  fetchMenuItemsSuccess,
  fetchMenuItemsFailure,
} from './menuItemsActions';

function fetchMenu() {
  return (dispatch) => {
    dispatch(fetchMenuItemsBegin());
    fetch('http://localhost:3001/api/v1/menus')
      .then((res) => res.json())
      .then((menuItems) => {
        if (menuItems.error) {
          throw menuItems.error;
        }
        dispatch(fetchMenuItemsSuccess(menuItems));
        return menuItems;
      })
      .catch((error) => {
        dispatch(fetchMenuItemsFailure(error));
      });
  };
}

export default fetchMenu;