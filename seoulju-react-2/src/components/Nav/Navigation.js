import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Header from '../Header';
import styles from './Navbar.module.css';
import {connect } from 'react-redux'



const Navigation = ({order}) => {
  const [itemCount, setItemCount] = useState(0); //set the cart counts to zero intially

  useEffect(() => {
    let count = 0;
    //iterate over the order array and count each ordered item
    order.forEach((item) => {
      count += item.ordered;
    });

    setItemCount(count);
  }, [order, itemCount]);

  return (
    <Navbar bg='light' expand='lg' sticky='top' className={styles.navbar}>
      <Link to='/'>
        <h2 className={styles.navbar_logo}>
          <Header tagline="We'll Soju A Good Time!" />
        </h2>
      </Link>
      <Link to='/login'><span>Admin Login</span></Link>
      <Link to='/checkout'>
        <div className={styles.navbar_cart}>
          <span className={styles.cart_title}>Cart:</span>
          <span className={styles.cart_counter} id='counter'>{itemCount} items</span>
        </div>
      </Link>
    </Navbar>
  );
};
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    order: state.order
  };
};

export default connect(mapStateToProps) (Navigation);
