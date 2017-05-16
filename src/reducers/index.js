import authState from './auth_reducer';
import todosState from './todos_reducer';
import { combineReducers } from 'redux';
import LOGOUT from '../actions/auth_actions';

export const appReducer = combineReducers({
  todosState,
  authState
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }
  return appReducer(state, action)
}
