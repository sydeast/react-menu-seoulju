import React from 'react';
import { connect } from 'react-redux';
import fetchMenu from '../actions/fetchMenu';
import App from '../App';

class FoodList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMenu());
  }
  render() {
    const { menuItems } = this.props;

    return (
      <div className='app'>
        <App menu={menuItems} />
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
