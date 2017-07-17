import { authState } from '../containers/auth';
import todosState from './todos_reducer';
import { flashState } from '../containers/flash';
import { accountState } from '../containers/account';
import { combineReducers } from 'redux';
import { authActions } from '../containers/auth';
import { routerReducer } from 'react-router-redux';

export const appReducer = combineReducers({
  authState,
  accountState,
  todosState,
  flashState,
  router: routerReducer
});

const { LOGOUT } = authActions;

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
