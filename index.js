import React, { Component } from 'react';
import { render } from 'react-dom';
import StaticRouter from './static-router.js'; // 静态路由
import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

render(<StaticRouter />, document.getElementById('root'));
