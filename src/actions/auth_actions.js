import axios from 'axios';
import * as s from '../utils/storage';


// types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

// action creators
export const userLogin = () => {
  return {
    type: LOGIN
  }
}

export const userLogout = () => {
  return {
    type: LOGOUT
  }
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

// thunks
export const persistToken = (token) => {
  return (dispatch) => {
    s.setXAuth(token);
    dispatch(setToken(token));
    dispatch(userLogin());
  }
}

export const logout = () => {
  return (dispatch) => {
    s.clear();
    dispatch(userLogout());
  }
}

export const getToken = (data) => {
  return async (dispatch) => {
    // If auth data is in local storage, assume log in
    if (s.checkXAuth()) {
      console.log('checking auth in getToken if may need to add a getState to thunk')
      dispatch(userLogin());
      return
    }
    else {
      try{
        let token = await axios.post('https://mighty-falls-76862.herokuapp.com/users/login', data);
        token = token.headers['x-auth'];
        dispatch(persistToken(token));
      } catch (e){
        console.log(e)
      }
    }
  }
}
