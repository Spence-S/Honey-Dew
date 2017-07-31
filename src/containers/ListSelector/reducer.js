import { CREATE_LIST, SET_ACTIVE, INIT_LISTS } from './actions';
import {
  UPDATE_LIST_ITEM,
  CREATE_LIST_ITEM,
  DELETE_LIST_ITEM
} from '../List/action_types';

const initialState = {
  lists: [],
  activeList: {
    name: '',
    list: []
  }
};

export const listState = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload.list]
      };
    case INIT_LISTS:
      return {
        ...state,
        lists: action.payload
      };
    case SET_ACTIVE:
      return {
        ...state,
        activeList: action.payload
      };
    case 'REFRESH_LIST':
      return {
        ...state,
        activeList: {
          list: action.payload
        }
      };
    case CREATE_LIST_ITEM:
      return {
        ...state,
        activeList: {
          list: [...state.list, action.payload.todo]
        }
      };
    case UPDATE_LIST_ITEM:
      return {
        ...state,
        activeList: {
          list: [
            ...state.list.slice(0, action.payload.index),
            { ...state.list[action.payload.index], text: action.payload.todo },
            ...state.list.slice(action.payload.index + 1, state.list.length)
          ]
        }
      };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        activeList: {
          list: [
            ...state.list.slice(0, action.payload),
            ...state.list.slice(action.payload + 1)
          ]
        }
      };
    default:
      return state;
  }
};
