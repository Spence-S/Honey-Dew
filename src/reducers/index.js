//import { combineReducers } from 'redux';
import { LOGIN, GET_USER } from '../actions/';

const initialState = {
 login: false,
 user: {}
}

export default function login(state = initialState, action) {
  switch( action.type ) {
    case LOGIN:
    return{
      ...state,
      login: true
    };
    case GET_USER:
    return{
      ...state,
      user: action.payload
    }
    default:
    return state;
  }
}
