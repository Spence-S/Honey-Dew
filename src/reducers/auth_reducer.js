import { LOGIN, SET_TOKEN } from '../actions/';

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
    case SET_TOKEN:
    return {
      ...state,
      token: action.payload
    }
    default:
    return state;
  }
}