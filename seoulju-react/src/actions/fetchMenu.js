import {
  fetchMenuItems,
} from './menuItemsActions';

function fetchMenu() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/menus')
      .then((res) => res.json())
      .then((menuItems) => {
        dispatch(fetchMenuItems(menuItems));
        return menuItems;
      })
      .catch((error) => console.log(error));

  };
}

export default fetchMenu;