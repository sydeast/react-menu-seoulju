import React from 'react';
//components
import Header from './components/Header';
import DishItem from './components/DishItem';
import AlterMenu from './components/AlterMenu';


class App extends React.Component {
 render() {

   return (
     <div className='seoulju-korean-kitchen'>
       <div className='menu-base'>
         <Header tagline='We’ll Soju a good time!' />
         <ul>
           {Object.keys(this.props.menu).map((key) => (
             <DishItem
               key={key}
               index={key}
               item={this.props.menu[key]}
             />
           ))}
         </ul>
       </div>
       <AlterMenu menu={this.props.menu} />
     </div>
   );
}
}

export default App;
