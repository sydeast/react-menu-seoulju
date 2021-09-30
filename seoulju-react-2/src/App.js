// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/Header';
import StoreContainer from './containers/StoreContainer';
import AdminContainer from './containers/AdminContainer';
import CartContainer from './containers/CartContainer';
import { connect } from 'react-redux';
import { fetchMenu } from './actions/menuActions';
import Navigation from './components/Nav/Navigation';
import Counter from './components/LC Challenge/Counter';

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchData();
  }
 render() {

   return (
     //  <div className='seoulju-korean-kitchen'>
     //    <div className='menu-base'>
     //      <Header tagline='We’ll Soju a good time!' />
     //    </div>
     //  </div>

     <Router>
       <Navigation />
       <br />
       <Route exact path='/' component={StoreContainer} />
       <Route exact path='/login' component={AdminContainer} />
       <Route exact path='/checkout' component={CartContainer} />
       <Route exact path='/lc' component={Counter} />
     </Router>
   );
}
}
const mapStatetoProps = (state) => {
  return { menu: state.menu, order: state.order, error: state.error };
};

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchMenu()) };
};
export default connect(mapStatetoProps, mapDispatchprops)(App);
