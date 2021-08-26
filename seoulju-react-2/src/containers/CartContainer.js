import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';
// import { Link } from 'react-router-dom';

function Cart({order}) {
          return (
          <div>
            <div className='cart-list'>
              {order.map((item) => (
                <Order key={item.id} item={item} />
              ))}
            </div>
            <div className='cart-sum'>
              <h4 className='cart-title'>Cart Summary</h4>
              <div className='item.price'>
                <span>TOTAL: (7 items)</span>
                <span>$ 0</span>
              </div>
              <button className='summary__checkoutBtn'>
                Proceed To Checkout
              </button>
            </div>
          </div>
        );

};

const mapStateToProps = (state) => {
  return {
    order: state.order
  };
};

export default connect(mapStateToProps)(Cart);
