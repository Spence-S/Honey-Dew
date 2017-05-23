import axios from 'axios';
// import * as s from '../utils/storage';

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
//const url='https://mighty-falls-76862.herokuapp.com/';
const url = process.env.RECT_APP_API_URL;

//helper
const getHeader = getState => ({ headers : { 'x-auth': getState().authState.token } });

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

export const updateTodo = (todo, index) => {
  return {
    type: UPDATE_TODO,
    payload: {
      index,
      todo
    }
  }
}

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload:{ todo }
  }
}

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    payload: index
  }
}


// api call thunk
export const updateList = () => async (dispatch, getState) => {
  const header = getHeader(getState);
   try{
     let res = await axios.get(`${url}/api`, header);
     res.data.todos = res.data.todos.map(todo => {
       //todo.notes = 'default notes. This is a longer string of notes to see how the notes might wrap around in the well. Well may not be the best thing for this type of thing. This is a long note.';
       todo.dueDate= '5/27/17';
       return todo;
     })
     dispatch(updateTodos(res.data.todos));
   }
   catch(e){
     dispatch(todosError());
   }
};

export const editTodo = (text, id, index) => async (dispatch, getState) => {
  dispatch(updateTodo(text, index));
  const header = getHeader(getState);
    try{
      let res = await axios.put(`${url}/api/${id}`, { text } , header);
      //ensure syncing with api
      let todo = res.data;
      dispatch(updateTodo(todo.text, index));
    } catch (e) {
      // if syncing did not occur, will handle errors at a later time
      //
      // TODO: handle errors better
      //
      console.log(e);
    }
}


export const createTodoThunk = (text) => async (dispatch, getState) => {
    const header = getHeader(getState);
    try{
      let res = await axios.post(`${url}/api`, { text }, header);
      dispatch(createTodo(res.data));
    }
    catch(e){
      dispatch(todosError(e));
    }
  };

  export const deleteTodoThunk = ( _id, index ) =>  async (dispatch, getState) => {
    dispatch(deleteTodo(index));
    const header = getHeader(getState);
    try {
      let res = await axios.delete(`${url}/api/${_id}`, header);
      console.log(res);
    } catch (e) {
      dispatch(todosError(e));
    }
  }
