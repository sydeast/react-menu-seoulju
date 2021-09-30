import React, {Component} from 'react';

//counter starts 0
// needs text input field
// click button total the character in input field

// const Counter = () => {

//    const [count, setCount] = useState(0);
//    let total = 0

//    const calculate = (e) => {
//     // e.preventDefault();
//     console.log( e );
//     setCount(e);

//   };
//    const recalculate = () =>{
//     const newTotal = total + count
//    }

//         return (
//           <div>
//             <input id='userIput'></input>
//             <button
//               onClick={() => {
//                 calculate(document.getElementById('userIput').value.length);
//                 recalculate(document.getElementById('userIput').value.length);
//               }}>
//               Click Me!
//             </button>
//             <p>Total characters Entered: {newTotal}</p>
//           </div>
//         );

// }

// export default Counter

class Counter extends Component {
  state = {
    count: 0,
    total: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target[0].value.length);
    let count = this.state.count;
    count = e.target[0].value.length;
    this.setState({ count });

    let total = this.state.total;
    total = this.state.total + count;
    this.setState({ total });

    console.log({ count });
    console.log({ total });

    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id='userinput'></input>
        <button type='submit'>Click Me!</button>
        <p>The total number of characters entered: {this.state.total}</p>
      </form>
    );
  }
}
export default Counter;
