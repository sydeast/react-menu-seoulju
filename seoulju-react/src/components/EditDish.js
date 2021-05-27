import React from 'react';

class EditDish extends React.Component {
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

export default EditDish