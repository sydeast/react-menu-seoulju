import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editDish } from '../actions/menuActions';
import styles from './AdminContainer.module.css';



function AdminContainer({ menu }) {
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

  // Ready.
  //Need to find a way to connect to the oAuth url /auth/google_oauth2 or do the One Time Code Flow
  return (
    <div>
      <h2>Inventory Login</h2>
      <p>Sign in to manage your restaurant's menu.</p>

      <button className='google'>Login with Google</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // editDish: (id, value) => dispatch(editDish(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
