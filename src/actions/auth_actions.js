import axios from 'axios';

// types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

// env vars
const url = process.env.REACT_APP_API_URL;


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

// thunks
export const getToken = (data) => async (dispatch, getState) => {
  try{
    let token = await axios.post(`${url}/users/login`, data);
    token = token.headers['x-auth'];
    dispatch(userLogin(token));
  } catch (e){
    console.log(e)
  }
}

export const getNewUserToken = data => async (dispatch, getState) => {
  try{
    let token = await axios.post(`${url}/users/`, data);
    token = token.headers['x-auth'];
    dispatch(userLogin(token));
  } catch (e){
    console.log(e)
  }
}

export const getTokenWithFacebook = data => async (dispatch, getState) => {
  try{
    let token = await axios.post(`${url}/users/facebook`, data);
    console.log('token:\n',token);
    token = token.headers['x-auth'];
    dispatch(userLogin({token, data}));
  } catch (e) {
    console.log(e);
  }
}
