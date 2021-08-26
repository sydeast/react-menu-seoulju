import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addToOrder } from '../../actions/menuActions';
// import styles from './Dish.module.css'

// class Dish extends React.Component {
//   render() {
//     // const { name, price, desc, status } = this.props.item;
//     const Dish = ({ name, price, desc, status }) => {
//     const isAvailable = status === 'available';
//     return (
//       <li className='food-item'>
//         <h3 className='food-name'>
//           {name}
//           <span className='price'>{price}</span>
//         </h3>
//         <p className='description'>{desc}</p>
//         <button disabled={!isAvailable}>
//           {isAvailable ? 'Add to Order' : 'Sold Out!'}
//         </button>
//       </li>
//     );
//   }
// }

// export default Dish;

function Dish({ dish, addToOrder }) {

  // const isAvailable = userLoggedIn === true;
  return (
    <div className='menu-items'>
          <div key={dish.name} className='menu-item'>
            <Card border='dark' style={{ width: '18rem' }}>
              <Card.Header as='h5'>{dish.category}</Card.Header>
              <Card.Body>
                <Card.Title className='dish-info'>{dish.name}</Card.Title>
                <Card.Text>
                  <span className='price'>
                    Price: {dish.price}
                  </span>
                  <br/>
                  <span className='dish-text'>{dish.desc}</span>
                </Card.Text>
                <Button onClick={() => addToOrder(dish.id)}>
                  Add to Order
                </Button>
              </Card.Body>
            </Card>
            <br />
          </div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToOrder: (id) => dispatch(addToOrder(id))
  };
};
export default connect(null, mapDispatchToProps) (Dish);
