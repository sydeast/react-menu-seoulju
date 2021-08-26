import React from 'react';
import Dish from "../components/DishItem/DishItem";
import {connect} from 'react-redux';


function StoreContainer({menu}) {
  return (
    <div className='overall-menu'>
      <div id='main-div'>
          <div className='menu-list'>
            {menu.map((dish) => (
            <Dish key={dish.id} dish={dish}/>
            ))}
          </div>
      </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect (mapStateToProps) (StoreContainer);
