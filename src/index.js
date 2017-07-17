// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

// middleware
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'; // dev use!

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import createHistory from 'history/createBrowserHistory';

// components
import Main from './containers/Main';
import { rootReducer } from './rootReducer';

//heleprs
import { loadState, saveState } from './utils/storage';

export const history = createHistory();
// Create a history of your choosing (we're using a browser history in this case)
const routerMW = routerMiddleware(history);
// local storage persistence
const persistedState = loadState();

// createStore
let store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunkMiddleware, logger, routerMW)
);
window.store = store;
// save state changed in local storage
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <Main />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('root')
);
