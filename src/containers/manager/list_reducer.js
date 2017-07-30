import { CREATE_LIST, SET_ACTIVE, INIT_LISTS } from './list_actions';

const initialState = {
  lists: [],
  activeList: {}
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
    default:
      return state;
  }
};
