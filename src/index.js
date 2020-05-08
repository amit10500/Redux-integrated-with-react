import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/index';

import { Provider } from 'react-redux';

// import Car from './ES6 Classes/Es6Class';

// import Header from './LifeCycleMethod/derivedState';

// const reducer = (state, actions) => {
//   console.log(actions);

//   return { name: "sarthak" }
// }





ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
{/* <Header favColour = "Yello"/> */ }
