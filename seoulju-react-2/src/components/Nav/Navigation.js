import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
      <Container>
        <Navbar.Brand href='/'>
          <Header tagline="We'll Soju A Good Time!" />
        </Navbar.Brand>
        <div className={styles.navbar__cart}>
          <Nav className='me-auto'>
            <Nav.Link href='checkout'>Cart:</Nav.Link>
            <div className={styles.cart__counter}>{itemCount} Items</div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
const mapStateToProps = (state) => {
  return {
    order: state.order
  };
};

export default connect(mapStateToProps) (Navigation);
