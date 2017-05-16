import { UPDATE_TODOS, UPDATE_TODO, TODOS_ERROR } from '../actions';

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
    case UPDATE_TODO:
    return {
      ...state,
      list: [
        ...state.list.slice(0, payload.index),
        payload.todo,
        ...state.list.slice(payload.index+1, state.list.length)
      ]
    }
    case TODOS_ERROR:
    return console.log(action.payload)
    default:
    return state;
  }
}
