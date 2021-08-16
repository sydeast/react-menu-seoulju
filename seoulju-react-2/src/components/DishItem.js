import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';

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
  // const dispatch = useDispatch();
  return (
    <div className='menu-items'>

        {menu.map((dish, index) => {
          return (
            <Row>
              <div key={index}>
                <Col>
                  <Card border='dark' style={{ width: '18rem' }}>
                    <Card.Header as='h5'>{dish.category}</Card.Header>
                    <Card.Body>
                      <Card.Title>{dish.name}</Card.Title>
                      <Card.Text>
                        Price: {dish.price}
                        <br />
                        Description: {dish.desc}
                      </Card.Text>
                      <Button>Add to Order</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <br />
              </div>
            </Row>
          );
        })}

    </div>
  );
}
export default Dish;
