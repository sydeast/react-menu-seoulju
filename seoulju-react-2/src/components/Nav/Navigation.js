import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Header from '../Header';
import styles from './Navbar.module.css';


const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top' className={styles.navbar}>
      <Container>
        <Navbar.Brand href='/'>
          <Header tagline="We'll Soju A Good Time!" />
        </Navbar.Brand>
        <div className={styles.navbar__cart}>
          <Nav className='me-auto'>
            <Nav.Link href='checkout'>Cart</Nav.Link>
            <div className={styles.cart__counter}>0 Items</div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
