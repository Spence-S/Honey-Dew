import { LOGIN, SET_TOKEN, LOGOUT } from '../actions/';

const initialState = {
  isLoggedIn: false,
  token: '',
}

export default function authState (state = initialState, action) {

  switch( action.type ) {
    case LOGIN:
    return {
      ...state,
      isLoggedIn: true
    };
    case LOGOUT:
    return {
      ...state,
      isLoggedIn: false
    }
    case SET_TOKEN:
    return {
      ...state,
      token: action.payload
    }
    default:
    return state;
  }
}
