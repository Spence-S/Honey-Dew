import loginState from './login_reducer';
import todosState from './todos_reducer';
import { combineReducers } from 'redux';

export const rootReducer =
combineReducers({
  todosState,
  loginState
});
