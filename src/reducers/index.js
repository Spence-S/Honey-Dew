import { LOGIN } from '../actions/';

const initialState = {
 login: false
}

export default function login(state = initialState, action) {
  switch( action.type ) {
    case LOGIN:
    return{
      ...state,
      login: true
    };
    default:
    return state;
  }
}
