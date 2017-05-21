import authState from './auth_reducer';
import todosState from './todos_reducer';
import { combineReducers } from 'redux';
import LOGOUT from '../actions/auth_actions';
import { routerReducer } from 'react-router-redux'


export const appReducer = combineReducers({
  todosState,
  authState,
  router: routerReducer
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }
  return appReducer(state, action)
}
