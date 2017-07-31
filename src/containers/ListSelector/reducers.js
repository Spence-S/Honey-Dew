import {
  UPDATE_TODOS,
  UPDATE_TODO,
  TODOS_ERROR,
  CREATE_TODO,
  DELETE_TODO
} from './todos_actions';

const initialState = {
  list: [],
  error: ''
};

export const listState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TODOS:
      return {
        ...state,
        list: [...payload]
      };
    case UPDATE_TODO:
      return {
        ...state,
        list: [
          ...state.list.slice(0, payload.index),
          { ...state.list[payload.index], text: payload.todo },
          ...state.list.slice(payload.index + 1, state.list.length)
        ]
      };
    case CREATE_TODO:
      return {
        ...state,
        list: [...state.list, payload.todo]
      };
    case TODOS_ERROR:
      return {
        ...state,
        error: console.log(action.payload)
      };
    case DELETE_TODO:
      return {
        ...state,
        list: [
          ...state.list.slice(0, payload),
          ...state.list.slice(payload + 1)
        ]
      };
    default:
      return state;
  }
};
