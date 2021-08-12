// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';

class App extends React.Component {
 render() {

   return (
     <div className='seoulju-korean-kitchen'>
       <div className='menu-base'>
         <Header tagline='We’ll Soju a good time!' />
       </div>
     </div>
   );
}
}


export default App;
