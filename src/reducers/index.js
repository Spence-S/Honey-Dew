import authState from './auth_reducer';
import todosState from './todos_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  todosState,
  authState
});
