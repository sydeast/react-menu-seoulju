import React from 'react';
import { connect } from 'react-redux';
import { updateDish } from '../actions/menuActions';

class EditDish extends React.Component {

  handleChange = (event) => {
    event.preventDefault()
    const foodId = this.props.item.id;
    const updateMenuItem = {
         [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? parseFloat(event.currentTarget.value)
          : event.currentTarget.value,
    };

    this.props.updateDish(foodId, updateMenuItem);
    window.location.reload(false);
  }

  render() {
    const itemId = this.props.item.id;
    return (
      <div className='food-edit'>
        <input
          name='category'
          type='text'
          onChange={this.handleChange}
          value={this.props.item.category}
        />
        <input
          name='name'
          type='text'
          onChange={this.handleChange}
          value={this.props.item.name}
        />
        <input
          name='price'
          type='text'
          onChange={this.handleChange}
          value={this.props.item.price}
        />
        <select
          name='status'
          type='text'
          onChange={this.handleChange}
          value={this.props.item.status}>
          <option value='available'>Available!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          type='text'
          onChange={this.handleChange}
          value={this.props.item.desc}
        />
        <button
          onClick={() => this.props.deleteMenuItem(itemId, this.props.index)}>
          Remove Menu Item
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.updateMenuItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDish: (id, dishProps) => {
      dispatch(updateDish(id, dishProps));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditDish);