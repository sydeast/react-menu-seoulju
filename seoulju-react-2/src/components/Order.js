import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { updateOrder } from '../actions/menuActions';


function Order({item}) {
  return (
          <li className='collection-item avatar' key={item.name}>
            <div className='item-desc'>
              <span className='dish-name'>{item.name}</span>
              <p>Subtotal with this item(s): $0</p>
              <b>Quantity: {item.ordered}</b>
              <br />
            </div>
          </li>
        );


  }
// }

// const mapStateToProps = (state) => {
//   return {
//     order: state.order,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };

// export default connect(mapStateToProps)(Order);
// export default connect(null, mapDispatchToProps) (Order)
export default Order