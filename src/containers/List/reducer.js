import {
  UPDATE_LIST_ITEM,
  CREATE_LIST_ITEM,
  DELETE_LIST_ITEM
} from './action_types';

const initialState = {
  list: [],
  error: ''
};

export const listState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_LIST_ITEM:
      return {
        ...state,
        list: [
          ...state.list.slice(0, payload.index),
          { ...state.list[payload.index], text: payload.todo },
          ...state.list.slice(payload.index + 1, state.list.length)
        ]
      };
    case CREATE_LIST_ITEM:
      return {
        ...state,
        list: [...state.list, payload.todo]
      };
    case DELETE_LIST_ITEM:
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
