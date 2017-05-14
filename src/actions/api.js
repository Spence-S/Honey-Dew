import axios from 'axios';
import {
  GET_TODOS,
  UPDATE_TODOS,
  //UPDATE_TODO,
  //EDIT_TODO,
  //DELETE_TODO,
  //GET_TODO,
  //TODO_ERROR,
  TODOS_ERROR
}  from './types';

// constants
const url='https://mighty-falls-76862.herokuapp.com/';
const headers = {headers: {"x-auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBmZDU3MGRjMjY5MzAwMTEyYTAyNTciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0NDU4NTc0fQ.agtwDpUPV2KBND20W75xVpmrdM_XUpSY4ZXqjNQ_bXg"}};

// action creators for getting todos
export const getTodos = () => {
  return{
    type: GET_TODOS
  };
};

export const updateTodos = (todos) => {
  return {
    type: UPDATE_TODOS,
    payload: todos
  };
};

export const todosError = (e) => {
  return {
    type: TODOS_ERROR,
    payload: e
  }
};

// api call thunk
export const todoApiCall = (user) => {
 return async (dispatch) => {
   dispatch(getTodos());
   try{
     let res = await axios.get(`${url}api`, headers);
     dispatch(updateTodos(res.data.todos));
   }
   catch(e){
     dispatch(todosError());
   }
  };
};
