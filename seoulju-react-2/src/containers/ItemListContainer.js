import React from "react";
import Header from '../components/Header';
import Dish from "../components/DishItem";

function ItemListContainer() {
    return (
      <div className='app'>
        <div className='seoulju-korean-kitchen'>
          <div className='menu-base'>
            <Header tagline='We’ll Soju a good time!' />
          </div>
        </div>
        < div className='dishes'>
            <Dish/>
        </div>
      </div>
    );

}
export default ItemListContainer;