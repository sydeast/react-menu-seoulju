// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Header from './components/Header';
import ItemListContainer from './containers/ItemListContainer';
import { connect } from 'react-redux';
import { fetchMenu } from './actions/fetchMenu';

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
     <BrowserRouter>
       <Route exact path='/' component={ItemListContainer} />
     </BrowserRouter>
   );
}
}


export default connect(null, { fetchMenu })(App);
