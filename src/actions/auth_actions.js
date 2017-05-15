import axios from 'axios';
import * as s from '../utils/storage';


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

export const logout = () => (dispatch) => {
  s.clear();
  console.log("dispatch");
  dispatch((() => ({ type: LOGOUT }))());
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
