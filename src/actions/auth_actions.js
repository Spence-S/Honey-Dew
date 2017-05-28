import axios from 'axios';

// types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

// env vars
const url = process.env.REACT_APP_API_URL;
const getHeader = getState => ({ headers : { 'x-auth': getState().authState.token } });

// action creators
export const userLogin = (payload) => {
  return {
    type: LOGIN,
    payload
  }
}

export const logout = () => {
  localStorage.clear();
  // dispatch((() => ({ type: LOGOUT }))());
  return { type: LOGOUT };
}

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
    payload: {
      showFlash: true,
      message: 'There was an error logging you in. Are you sure you are signed up?'
    }
  }
}

// thunks
export const getToken = (data) => async (dispatch, getState) => {
  try{
    let token = await axios.post(`${url}/users/login`, data);
    token = token.headers['x-auth'];
    dispatch(userLogin({token, data: {}}));
  } catch (e){
    console.log(e)
  }
}

export const getNewUserToken = data => async (dispatch, getState) => {
  try{
    let token = await axios.post(`${url}/users/`, data);
    token = token.headers['x-auth'];
    dispatch(userLogin({token}, data: {}));
  } catch (e){
    console.log(e)
  }
}

export const getTokenWithFacebook = data => async (dispatch, getState) => {
  try{
    let token = await axios.post(`${url}/users/facebook/test`, data);
    console.log('token:\n',token);
    token = token.headers['x-auth'];
    dispatch(userLogin({token, data}));
  } catch (e) {
    console.log(e);
  }
}

export const logoutThunk = data => async (dispatch, getState) => {
  const header = getHeader(getState);
  try{
    let message = await axios.get(`${url}/users/logout`, header);
    message = message.data;
    console.log("message from logoutThunk:", message);
    dispatch(logout());
  } catch (e){
    console.log(e);
    dispatch(logout());
  }
}
