import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class Order extends Component {
  render() {
    let existsInOrder = this.props.order.length ? (
      this.props.order.map((item) => {
        return (
          <li className='collection-item avatar' key={item.name}>
            <div className='item-desc'>
              <span className='dish-name'>{item.name}</span>
              <p>
                Subtotal: $ ({item.price} * {item.ordered})
              </p>
              <p>
                <b>Quantity: {item.ordered}</b>
              </p>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className='container'>
        <div className='cart'>
          <h5>You have ordered:</h5>
          <ul className='collection'>{existsInOrder}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

export default connect(mapStateToProps)(Order);
