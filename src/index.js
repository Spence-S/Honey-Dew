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
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

// components
import Main from './containers/Main';
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
window.store = store;
// save state changed in local storage
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
