import axios from 'axios';

// types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

// env vars
const url = process.env.REACT_APP_API_URL;

const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

// action creators
export const userLogin = payload => {
  return {
    type: LOGIN,
    payload
  };
};

export const logout = () => {
  localStorage.clear();
  // dispatch((() => ({ type: LOGOUT }))());
  return { type: LOGOUT };
};

export const loginError = payload => {
  return {
    type: LOGIN_ERROR,
    payload
  };
};

// thunks
export const getToken = data => async (dispatch, getState) => {
  try {
    let res = await axios.post(`${url}/users/login`, data);
    let token = res.headers['x-auth'];
    let user = res.data;
    let message = 'Welcome back!';
    dispatch(userLogin({ token, user, message }));
  } catch (error) {
    const payload = {
      message: error.response.data,
      status: 'danger'
    };
    dispatch(loginError(payload));
  }
};

export const getNewUserToken = data => async (dispatch, getState) => {
  try {
    let res = await axios.post(`${url}/users/`, data);
    let token = res.headers['x-auth'];
    let user = res.data;
    let message =
      'Thanks for signing up! Now fill up your list! More features coming soon!';
    dispatch(userLogin({ token, user, message }));
  } catch (error) {
    const payload = {
      message: error.response.data,
      status: 'danger'
    };
    dispatch(loginError(payload));
  }
};

// export const getTokenWithFacebook = data => async (dispatch, getState) => {
//   try{
//     let token = await axios.post(`${url}/users/facebook/test`, data);
//     console.log('token:\n',token);
//     token = token.headers['x-auth'];
//     dispatch(userLogin({token, data}));
//   } catch (e) {
//     console.log(e);
//   }
// }

export const logoutThunk = data => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    await axios.get(`${url}/users/logout`, header);
    dispatch(logout());
  } catch (e) {
    // TODO handle errors correctly if logout fails
    dispatch(logout());
  }
};

//http://jsbin.com/qalubawama/edit?js,console
