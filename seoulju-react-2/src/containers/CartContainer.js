import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';
import styles from './Cart.module.css';
// import { Link } from 'react-router-dom';

function Cart({order}) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
      let items = 0;
      let price = 0;

      order.forEach((item) => {
        items += item.ordered;
        price += item.ordered * item.price;
      });

      setTotalItems(items);
      setTotalPrice(price);
    }, [order, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  return (
    <div className={styles.order}>
      <div className={styles.order_items}>
        {order.map((item) => (
          <Order key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.order_summary}>
        <h4 className={styles.summary_title}>Order Summary</h4>
        <div className={styles.summary_price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className='summary__checkoutBtn'>Checkout</button>
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
