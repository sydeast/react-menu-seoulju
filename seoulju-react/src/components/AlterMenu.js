//Also known as menu planning or inventory, this file is to alter the menu for the restaurant

import React from 'react';
import AddFoodItem from './AddNewMenuItem';
import EditDish from './EditDish';

class Menu extends React.Component {
  render() {
    return (
      <div className='foods-inventory'>
        <h2>Menu Planning</h2>
        <AddFoodItem />
        {Object.keys(this.props.menu).map((key) => (
          <EditDish
            key={key}
            index={key}
            item={this.props.menu[key]}
            // updateMenu={this.props.updateMenu}
            // deleteMenuItem={this.props.deleteMenuItem}
          />
        ))}
      </div>
    );
  }
}

export default Menu;
