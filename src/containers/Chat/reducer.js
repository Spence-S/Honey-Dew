import { SET_USERS } from './action_types';

const initialState = {
  userList: []
};

const userListState = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userList: action.payload
      };
    default:
      return state;
  }
};

export { userListState };
