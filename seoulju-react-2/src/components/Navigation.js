import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Header from './Header';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand href='/'>
          <Header tagline="We'll Soju A Good Time!" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='checkout'>My Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
