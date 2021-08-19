import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addToOrder } from '../actions/menuActions';

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

function Dish() {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <div className='menu-items section-center'>
      {menu.map((dish) => {
        return (
          <div key={dish.id} className='menu-item'>
            <Card border='dark' style={{ width: '18rem' }}>
              <Card.Header as='h5'>{dish.category}</Card.Header>
              <Card.Body>
                <Card.Title className='dish-info'>{dish.name}</Card.Title>
                <Card.Text>
                  <h5 className='price'>Price: {dish.price}</h5>
                  <span className='dish-text'>Description: {dish.desc}</span>
                </Card.Text>
                <Button onClick={() => dispatch(addToOrder(dish, dish.id))}>
                  Add to Order
                </Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
}
export default Dish;
