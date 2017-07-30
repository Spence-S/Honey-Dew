import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

export const SET_USERS = 'SET_USERS';

export const refreshUsers = userList => ({
  type: 'SET_USERS',
  payload: userList
});

export const getUsers = () => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.get(`${url}/users`, header);
    //  res.data.todos = res.data.todos.map(todo => {
    //    return todo;
    //  });
    dispatch(refreshUsers(res.data));
  } catch (err) {
    console.log(err.response);
  }
};
