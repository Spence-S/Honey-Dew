import {
  CREATE_LIST,
  SET_ACTIVE,
  INIT_LISTS,
  UPDATE_LIST_ITEM,
  CREATE_LIST_ITEM,
  DELETE_LIST_ITEM
} from './action_types';

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
    case CREATE_LIST_ITEM:
      return {
        ...state,
        activeList: {
          ...state.activeList,
          list: [...state.activeList.list, action.payload.listItem]
        }
      };
    case UPDATE_LIST_ITEM:
      return {
        ...state,
        activeList: {
          ...state.activeList,
          list: [
            ...state.activeList.list.slice(0, action.payload.index),
            {
              ...state.activeList.list[action.payload.index],
              text: action.payload.listItem
            },
            ...state.activeList.list.slice(
              action.payload.index + 1,
              state.activeList.list.length
            )
          ]
        }
      };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        activeList: {
          ...state.activeList,
          list: [
            ...state.activeList.list.slice(0, action.payload),
            ...state.activeList.list.slice(action.payload + 1)
          ]
        }
      };
    default:
      return state;
  }
};
