import { LOGIN, LOGOUT} from '../actions/auth_actions';
import { TODOS_ERROR, TODO_ERROR } from '../actions/todos_actions';
import { HIDE_FLASH } from '../actions/flash_actions';

const initialState = {
  showFlash: true,
  message: '',
  status: ''
}

export default function flashState (state = initialState, action){
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        status: 'success',
        message: 'Login was successful',
        showFlash: true
      }
    case LOGOUT:
      return {
        ...state,
        status: 'success',
        message: 'All logged out! Come back soon :)',
        showFlash: true
      }
    case TODO_ERROR:
      return {
        ...state,
        status: 'danger',
        message: 'There was an error with that particular todo action',
        showFlash: true
      }
    case TODOS_ERROR:
      return {
        ...state,
        status: 'danger',
        message: 'There was a problem updating the todo list. Try again.',
        showFlash: true
      }
    case HIDE_FLASH:
      return {
        ...state,
        showFlash: false
      }
    default:
      return state;
  }
}
