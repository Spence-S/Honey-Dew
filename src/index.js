// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// middleware
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'; // dev use!

// styles
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import css from './index.css';

// components
import Login from './containers/Login';
import reducers from './reducers/';

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
