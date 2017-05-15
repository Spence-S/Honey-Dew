import { LOGIN, LOGOUT } from '../actions/';

const initialState = {
  isLoggedIn: false,
  token: ''
}

export default function authState (state = initialState, action) {

  switch( action.type ) {
    case LOGIN:
    return {
      ...state,
      isLoggedIn: true,
      token: action.payload
    };
    case LOGOUT:
    return {
      ...state,
      isLoggedIn: false
    }
    default:
    return state;
  }
}
