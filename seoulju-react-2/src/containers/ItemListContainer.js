import React from "react";
// import Header from '../components/Header';
import Dish from "../components/DishItem";
// import Navigation from "../components/Navigation";

function ItemListContainer() {
    return (
      <div className='app'>
        < div className='dishes'>
            <Dish/>
        </div>
      </div>
    );

}
export default ItemListContainer;