import axios from 'axios';

// types
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO = 'GET_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const AWAIT_UPDATE = 'AWAIT_UPDATE';
export const TODOS_ERROR = 'TODOS_ERROR';
export const TODO_ERROR = 'TODO_ERROR';

// constants
const url='https://mighty-falls-76862.herokuapp.com/';

// temporary for development
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
