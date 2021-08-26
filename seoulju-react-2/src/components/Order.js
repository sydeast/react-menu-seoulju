import React, { Component } from 'react';
// import { connect, useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { updateOrder } from '../actions/menuActions';


let subtotal = 0;

// class Order extends Component {

//   render() {

function Order() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

    // let existsInOrder = this.props.order.length ? (
    let existsInOrder = order.length ? (
      order.map((item) => {
        subtotal = item.ordered * item.price;

        return (
          <li className='collection-item avatar' key={item.name}>
            <div className='item-desc'>
              <span className='dish-name'>{item.name}</span>
              <p>Subtotal with this item(s): ${subtotal}</p>
              <b>Quantity: {item.ordered}</b>
              <br />
            </div>
          </li>
        );
      })
    ) : (
      <p>Subtotal: ${subtotal}</p>
    );
    return (
      <div className='container'>
        <div className='cart'>
          <h5>Expected Total = ${subtotal}</h5>
          <ul className='ordered'>{existsInOrder}</ul>
        </div>
      </div>
    );
  }
// }

// const mapStateToProps = (state) => {
//   return {
//     order: state.order,
//   };
// };

// export default connect(mapStateToProps)(Order);
export default Order
