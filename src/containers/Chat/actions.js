import * as ACTIONS from './action_types';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

export const getUsersSuccess = userList => ({
  type: ACTIONS.SET_USERS,
  payload: userList
});

export const getUsers = () => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.get(`${url}/users`, header);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    console.log(err.response);
  }
};
