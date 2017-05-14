// // dependencies
// import axios from 'axios';
// const url='https://mighty-falls-76862.herokuapp.com/users/me'


// types
export const LOGIN = 'LOGIN';
export const GET_USER = 'GET_USER';

export function loginUser() {
  return {
    type: LOGIN
  }
}

export function getUser(data){
  return {
    type: GET_USER,
    payload: data
  }
}

export function getUserId () {
  return {
    type: LOGIN
  }
    // return function (dispatch) {
    // axios.get(url, {headers: {"x-auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBmZDU3MGRjMjY5MzAwMTEyYTAyNTciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0NDU4NTc0fQ.agtwDpUPV2KBND20W75xVpmrdM_XUpSY4ZXqjNQ_bXg"}})
    //   .then( data => {
    //     // console.log(data);
    //     dispatch(getUser(data.data));
    //     dispatch(loginUser());
    //   })
    //   .catch(e=> console.log(e));
    // }
}
