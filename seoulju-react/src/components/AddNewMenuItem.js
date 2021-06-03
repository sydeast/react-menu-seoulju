//This file helps create new dishes to add to the menu.
import React from 'react';
import {connect} from 'react-redux';
import { createNewDish } from '../actions/menuActions';

class AddFoodItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: '',
            status: '',
            desc: '',
        }
    }
  categoryRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();

  createItem = (event) => {
      //stop form from submit default
    event.preventDefault();
    //create variables
    const newFoodItem = {
      category: this.categoryRef.current.value,
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,

    }
    this.props.createNewDish(newFoodItem);
    
  }

   render() {
    return (
      <form className='food-edit' onSubmit={this.createItem}>
        <input
          name='category'
          ref={this.categoryRef}
          type='text'
          placeholder='Category'
        />
        <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
        <input
          name='price'
          ref={this.priceRef}
          type='text'
          placeholder='Price'
        />
        <select name='status' ref={this.statusRef}>
          <option value='available'>Available!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          ref={this.descRef}
          type='text'
          placeholder='Desc'
        />

        <button type='submit'>Add Item to the Menu </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createNewDish: (newDish) => {
      dispatch(createNewDish(newDish));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddFoodItem);