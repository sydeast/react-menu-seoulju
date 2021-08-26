import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import styles from './Order.module.css'

import { updateOrder, removeFromOrder } from '../../actions/menuActions';


function Order({ item, updateOrder, removeFromOrder }) {
  const [input, setInput] = useState(item.ordered);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    updateOrder(item.id, e.target.value);
  };

  return (
    <div className='ordered-item' key={item.name}>
      <div className='item-desc'>
        <span className='dish-name'>{item.name}</span>
        <p className={styles.details_desc}>{item.desc}</p>
        <p className={styles.details_price}>$ {item.price}</p>
      </div>
      <div className={styles.orderItem_actions}>
        <div className={styles.orderItem_ordered}>
          <label htmlFor='qty'>Qty</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className={styles.actions_deleteItemBtn}
          onClick={() => removeFromOrder(item.id)}>
          <img
            src='https://image.flaticon.com/icons/svg/709/709519.svg'
            alt=''
          />
        </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrder: (id, value) => dispatch(updateOrder(id, value)),
    removeFromOrder: (id) => dispatch(removeFromOrder(id)),
  };
};

// export default connect(mapStateToProps)(Order);
export default connect(null, mapDispatchToProps) (Order)
// export default Order