import React from 'react';
import { connect } from 'react-redux';
import App from '../App';
import fetchMenu from '../actions/fetchMenu';

class FoodList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMenu());
  }
  render() {
    const { menuItems } = this.props;

    return (
      <div className='app'>
        <App menu={menuItems} addMenuItem={this.addMenuItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menuItems: state.menuItems.menu,
  loading: state.menuItems.loading,
  error: state.menuItems.error,
});



export default connect(mapStateToProps)(FoodList);
