// state slices
import { authState } from '../containers/auth';
import { todosState } from '../containers/todos';
import { flashState } from '../containers/flash';
import { accountState } from '../containers/account';
import { authActions } from '../containers/auth';

// from libraries
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// state
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
