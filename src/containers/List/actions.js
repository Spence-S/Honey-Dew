import axios from 'axios';
import {
  UPDATE_TODOS,
  UPDATE_TODO,
  CREATE_TODO,
  TODOS_ERROR
} from './action_types';

import { getAllLists } from '../manager/list_actions';
const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

// action creators for getting todos
export const updateTodos = todos => {
  return {
    type: UPDATE_TODOS,
    payload: todos
  };
};

export const todosError = payload => {
  return {
    type: TODOS_ERROR,
    payload
  };
};

export const updateTodo = (todo, index) => {
  return {
    type: UPDATE_TODO,
    payload: {
      index,
      todo
    }
  };
};

export const createTodo = todo => {
  return {
    type: CREATE_TODO,
    payload: { todo }
  };
};

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  };
};

// api call thunk
export const updateList = () => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.get(`${url}/api`, header);
    res.data.todos = res.data.todos.map(todo => {
      return todo;
    });
    dispatch(updateTodos(res.data.todos));
  } catch (err) {
    console.log(err.response);
    const payload = {
      message: err.response.data,
      status: 'danger'
    };
    dispatch(todosError(payload));
  }
};

export const editTodo = (text, id, index) => async (dispatch, getState) => {
  dispatch(updateTodo(text, index));
  console.log(`text: ${text} \n id: ${id} \n index: ${index}`);
  const header = getHeader(getState);
  try {
    let res = await axios.put(`${url}/lists/listitem/${id}`, { text }, header);
    //ensure syncing with api
    console.log(res);
    let todo = res.data;
    dispatch(updateTodo(todo.text, index));
  } catch (e) {
    // if syncing did not occur, will handle errors at a later time
    //
    // TODO: handle errors better
    //
    console.log(e);
  }
};

export const createTodoThunk = text => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.post(`${url}/api`, { text }, header);
    dispatch(createTodo(res.data));
  } catch (e) {
    dispatch(todosError(e));
  }
};

export const deleteTodoThunk = (_id, index) => async (dispatch, getState) => {
  dispatch(deleteTodo(index));
  const header = getHeader(getState);
  try {
    await axios.delete(`${url}/lists/listitem/${_id}`, header);
    getAllLists();
  } catch (e) {
    dispatch(todosError(e));
  }
};
