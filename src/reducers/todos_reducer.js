import { UPDATE_TODOS, UPDATE_TODO, TODOS_ERROR, CREATE_TODO, DELETE_TODO } from '../actions';

const initialState = {
  list: [{text: 'Default state todo', notes: 'Default notes field', due: '5/25/17'}]
}


export default function todosState (state = initialState, action){
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TODOS:
      return {
        ...state,
        list: [...payload]
      }
    case UPDATE_TODO:
      return {
        ...state,
        list: [
          ...state.list.slice(0, payload.index),
          {...state.list[payload.index], text: payload.todo},
          ...state.list.slice(payload.index+1, state.list.length)
        ]
      }
    case CREATE_TODO:
      return {
        ...state,
        list: [...state.list, payload.todo]
      }
    case TODOS_ERROR:
      return console.log(action.payload)
    case DELETE_TODO:
      return {
        ...state,
        list: [
          ...state.list.slice(0, payload),
          ...state.list.slice(payload+1)
        ]
      }
    default:
      return state;
  }
}
