import authState from './auth_reducer';
import todosState from './todos_reducer';
import flashState from './flash_reducer';
import userState from './user_reducer';
import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/auth_actions';
import { routerReducer } from 'react-router-redux'


export const appReducer = combineReducers({
  authState,
  userState,
  todosState,
  flashState,
  router: routerReducer
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action)
}
