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

//heleprs
import { loadState, saveState } from './utils/storage';

// local storage persistence
const persistedState = loadState();

// createStore
let store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

// save state changed in local storage
store.subscribe(() => {
  saveState(store.getState());
});

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
