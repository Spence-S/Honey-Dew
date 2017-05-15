import axios from 'axios';
import * as s from '../utils/storage';

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

//helper
const getToken = (getState) => {
  return getState().authState.token;
}

// action creators for getting todos
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
export const todoApiCall = () => async (dispatch, getState) => {
  const token = getToken(getState);
  const header = { headers : { 'x-auth': token } };
   try{
     let res = await axios.get(`${url}api`, header);
     dispatch(updateTodos(res.data.todos));
   }
   catch(e){
     dispatch(todosError());
   }
};


export const createTodo = (text) => async (dispatch, getState) => {
    try{
      let res = await axios.post(`${url}api`, s.getHeader());
      dispatch(updateTodos(res.data.todos));
    }
    catch(e){
      dispatch(todosError());
    }
  };
