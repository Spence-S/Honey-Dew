import { LOGIN, LOGOUT } from './auth_actions';

const initialState = {
  isLoggedIn: false,
  token: ''
};

export const authState = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: ''
      };
    default:
      return state;
  }
};
