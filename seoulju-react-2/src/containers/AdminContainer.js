import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editDish, removeFromMenu } from '../actions/menuActions';
import styles from './AdminContainer.module.css';



function AdminContainer({ menu, removeFromMenu }) {
  //   return menu.map((dish) => (
  // <div className={styles.dishedit} key={dish.id}>
  //   <select type='text' name='category' defaultValue={dish.category}>
  //     <option value='appetizers'>Appetizers</option>
  //     <option value='rice-plates'>Rice Plates</option>
  //     <option value='entrees'>Entrees</option>
  //     <option value='soups'>Soups</option>
  //     <option value='kfc'>Korean Fried Chicken</option>
  //     <option value='sauces'>Sauces</option>
  //     <option value='extras'>Extras</option>
  //   </select>
  //   <input type='text' name='name' defaultValue={dish.name}></input>
  //   <textarea type='text' name='desc' defaultValue={dish.desc}></textarea>
  //   <input type='text' name='price' defaultValue={dish.price}></input>

  //   <select type='text' name='status' defaultValue={dish.status}>
  //     <option value='available'>Fresh!</option>
  //     <option value='unavailable'>Sold Out!</option>
  //   </select>
  //   <button onClick={() => editDish(dish.id, dish)}>Save Edits</button>
  //   <button>Remove from menu</button>
  //   <br />
  // </div>

  //   ));
  return menu.map((dish) => (
    <div className={styles.dishedit} key={dish.id}>
      <div className={styles.dishItem_details}>
        <p className={styles.dish_category}>{dish.category}</p>
        <p className={styles.dish_name}>{dish.name}</p>
        <p className={styles.dish_desc}>{dish.desc}</p>
        <p className={styles.dish_price}>$ {dish.price}</p>
      </div>
      <div className={styles.dishItem_actions}></div>
      <button
        onClick={() => removeFromMenu(dish.id)}> Remove From Menu
        </button>
    </div>
  ));
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // editDish: (id, value) => dispatch(editDish(id, value)),
    removeFromMenu: (id) => dispatch(removeFromMenu(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
