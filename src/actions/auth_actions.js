import axios from 'axios';

// types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';

// action creators
export const userLogin = () => {
  return {
    type: LOGIN
  }
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

// thunk
export const persistToken = (token) => {
  return (dispatch) => {
    window.localStorage.setItem('x-auth', token);
    dispatch(setToken(token));
  }
}

export const getToken = (data) => {
  return async (dispatch) => {
    if (window.localStorage.getItem('x-auth')) {
      dispatch(userLogin())
      return
    }
    let token = await axios.post('https://mighty-falls-76862.herokuapp.com/users/login', data);
    token = token.headers['x-auth'];
    dispatch(persistToken(token));
  }
}