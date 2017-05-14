// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// middleware
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'; // dev use!

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// components
import Login from './containers/Login';
import {rootReducer} from './reducers';

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
