export const fetchMenu = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/menus')
      .then((res) => res.json())
      .then(data => {
        const menuItems = data.map((dish) => ({
          ...dish
        }));
        dispatch({
          type: 'FETCH_MENUITEMS',
          payload: menuItems,
        });
      })
      .catch((error) => console.log("error", error));

  };
}