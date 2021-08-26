import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Header from '../components/Header';
// import Navigation from "../components/Navigation";
import Dish from "../components/DishItem";
import Order from "../components/Order";


function StoreContainer() {
  return (
    <div className='seoulju-korean-kitchen'>
        {/* <Navigation /> */}
        <br/>
      <Container id='main-container'>
        <Row>
          <Col className='menu-list'>
            <Dish />
          </Col>
          <Col className='order-list'>
            <Order />
          </Col>
        </Row>
      </Container>
    </div>

  );
}
export default StoreContainer;
