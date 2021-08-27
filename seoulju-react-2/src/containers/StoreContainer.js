import React from 'react';
import Dish from "../components/DishItem/DishItem";
import {connect} from 'react-redux';
import {filterMenu} from '../actions/menuActions';


function StoreContainer({ menu }) {


  return (
    <div className='overall-menu'>
      <div id='main-div'>
        <div className='menu-list'>
          {/* <div className='select'>
            <select
              onChange={(e) => {
                filterMenu(e.target.value);
              }}
              className='custom-select'
              aria-label='Filter Dishes By Course'>
              <option value='All'>Filter By Course</option>
              <option value='Appetizer'>Appetizer</option>
              <option value='Rice Plates'>Rice Plates</option>
              <option value='Entrees'>Entrees</option>
              <option value='Soups'>Soups</option>
              <option value='Korean Fried Chicken'>Korean Fried Chicken</option>
              <option value='Sauces'>Sauces</option>
              <option value='Extras'>Extras</option>
            </select>
            <span className='focus'></span>
          </div> */}
          {menu.map((dish) => (
            <Dish key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    filter: state.filter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterMenu: (category) => dispatch(filterMenu(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);
