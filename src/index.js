import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import css from './index.css';
import Login from './containers/Login';


ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
