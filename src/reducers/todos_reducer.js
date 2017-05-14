import { UPDATE_TODOS, GET_TODOS, TODOS_ERROR } from '../actions';

const initialState = {
  list: []
}


export default function todosState (state = initialState, action){
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TODOS:
    return {
      ...state,
      list: payload
    }
    case GET_TODOS:
    return {
      ...state,
      list: []
    }
    case TODOS_ERROR:
    return console.log(action.payload)
    default:
    return state;
  }
}
