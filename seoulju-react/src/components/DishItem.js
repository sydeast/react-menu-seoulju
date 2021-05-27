import React from 'react';

class Dish extends React.Component {
  render() {
    const { name, price, desc, status } = this.props.item;
    // const Dish = ({ name, price, desc, status }) => {
    const isAvailable = status === 'available';
    return (
      <li className='food-item'>
        <h3 className='food-name'>
          {name}
          <span className='price'>{price}</span>
        </h3>
        <p className='description'>{desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? 'Add to Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Dish;
