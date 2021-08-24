// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/Header';
import StoreContainer from './containers/StoreContainer';
import ItemListContainer from './containers/ItemListContainer';
import OrderContainer from './containers/OrderContainer';
import { connect } from 'react-redux';
import { fetchMenu } from './actions/menuActions';
// import Navigation from './components/Navigation';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMenu();
  }
 render() {

   return (
     //  <div className='seoulju-korean-kitchen'>
     //    <div className='menu-base'>
     //      <Header tagline='We’ll Soju a good time!' />
     //    </div>
     //  </div>

     <Router>
       {/* <StoreContainer /> */}
       <br />
       <Route exact path='/' component={StoreContainer} />
       <Route exact path='/checkout' component={OrderContainer} />
     </Router>
   );
}
}


export default connect(null, { fetchMenu })(App);
