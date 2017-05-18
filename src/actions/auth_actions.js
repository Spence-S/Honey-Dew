import axios from 'axios';

// types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

// action creators
export const userLogin = (token) => {
  return {
    type: LOGIN,
    payload: token
  }
}

export const logout = () => {
  window.localStorage.clear();
  //dispatch((() => ({ type: LOGOUT }))());
  return { type: LOGOUT };
}

// thunks
export const getToken = (data) => async (dispatch, getState) => {
  try{
    let token = await axios.post('https://mighty-falls-76862.herokuapp.com/users/login', data);
    token = token.headers['x-auth'];
    dispatch(userLogin(token));
  } catch (e){
    console.log(e)
  }
}

export const getNewUserToken = (data) => async (dispatch, getState) => {
  try{
    let token = await axios.post('https://mighty-falls-76862.herokuapp.com/users/', data);
    token = token.headers['x-auth'];
    dispatch(userLogin(token));
  } catch (e){
    console.log(e)
  }
}

export const getTokenWithFacebook = () => async (dispactch, getState) => {
  try{
    return
  } catch(e) {
    return
  }
}
