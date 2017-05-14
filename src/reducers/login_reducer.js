import { LOGIN } from '../actions/';

const initialState = {
  isLoggedIn: false
}

export default function loginState (state = initialState, action) {

  switch( action.type ) {
    case LOGIN:
    return{
      ...state,
      isLoggedIn: true
    };
    // case GET_USER:
    // return{
    //   ...state,
    //   user: action.payload
    // };
    default:
    return state;
  }
}
