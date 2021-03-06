import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editDish, removeFromMenu, filterMenu } from '../actions/menuActions';
import styles from './AdminContainer.module.css';



function AdminContainer({ menu, filter, removeFromMenu, filterMenu }) {
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
  return (
    <div className='admin-dishes'>
      <div className='select'>
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
      </div>
      {filter.map((dish) => (
        <div className={styles.dish_edit} key={dish.id} id='editingItems'>
          <div className={styles.dishItem_details}>
            <p className={styles.dish_category}>{dish.category}</p>
            <p className={styles.dish_name}>{dish.name}</p>
            <p className={styles.dish_desc}>{dish.desc}</p>
            <p className={styles.dish_price}>$ {dish.price}</p>
          </div>
          <div className={styles.dishItem_actions}></div>
          <button onClick={() => removeFromMenu(dish)} className='removeBtn'>
            {' '}
            Remove From Menu
          </button>
        </div>
      ))}
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
    // editDish: (id, value) => dispatch(editDish(id, value)),
    removeFromMenu: (dish) => dispatch(removeFromMenu(dish)),
    filterMenu: (category) => dispatch(filterMenu(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
