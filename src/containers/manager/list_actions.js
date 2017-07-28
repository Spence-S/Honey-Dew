import axios from 'axios';
// import * as s from '../utils/storage';
import { updateTodos, CREATE_TODO, todosError } from '../todos/todos_actions';

// types
export const CREATE_LIST = 'CREATE_LIST';
export const SET_ACTIVE = 'SET_ACTIVE';
export const INIT_LISTS = 'INIT_LISTS';
export const DELETE_TODO = 'DELETE_TODO';

// other action creators needed

// constants
//const url='https://mighty-falls-76862.herokuapp.com/';
const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

// Create a new empty list in the applcation
export const createList = list => {
  return {
    type: CREATE_LIST,
    payload: { list }
  };
};

// initialize the lists
export const initLists = lists => {
  console.log('lists from initLists', lists);
  return {
    type: INIT_LISTS,
    payload: lists
  };
};

// set activeList
export const setActiveList = list => ({
  type: SET_ACTIVE,
  payload: list
});

// create a todo list
export const createTodo = todo => {
  return {
    type: CREATE_TODO,
    payload: { todo }
  };
};

// delete a todo
export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  };
};

// Send the post request to make the new list on the backend
export const postList = name => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.post(`${url}/lists`, { name }, header);
    dispatch(createList(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const getAllLists = () => async (dispatch, getState) => {
  console.log('called get all lists');
  const header = getHeader(getState);
  try {
    let res = await axios.get(`${url}/lists`, header);
    dispatch(initLists(res.data));
    console.log(
      'conditional in get all lists',
      getState().listState.activeList.name
    );
    if (!getState().listState.activeList.name) {
      dispatch(setActiveList(res.data[0]));
    }
  } catch (e) {
    console.log(e);
  }
};

export const getList = list => async (dispatch, getState) => {
  const header = getHeader(getState);
  dispatch(setActiveList(list));
  try {
    let res = await axios.get(`${url}/lists/${list._id}`, header);
    res.data.todos = res.data.todos.map(todo => {
      return todo;
    });
    return dispatch(updateTodos(res.data.todos));
  } catch (err) {
    // just log err for now TODO handle appropriatley
    console.log(err);
  }
};

// POST request to lists/:id then subsequent GET request to /lists update lists view
export const postListItem = (list, text) => async (dispatch, getState) => {
  const { _id } = list;
  const header = getHeader(getState);
  try {
    console.log('sending POST to lists/:id');
    let res = await axios.post(`${url}/lists/${_id}`, { text }, header);
    dispatch(createTodo(res.data.newTodo));
    let res2 = await axios.get(`${url}/lists`, header);
    dispatch(initLists(res2.data));
  } catch (e) {
    console.log(e);
  }
};

export const deleteListItem = (listId, listItemId, index) => async (
  dispatch,
  getState
) => {
  dispatch(deleteTodo(index));
  const header = getHeader(getState);
  try {
    let res = await axios.delete(
      `${url}/lists/${listId}/${listItemId}`,
      header
    );
    let res2 = await axios.get(`${url}/lists`, header);
    dispatch(initLists(res2.data));
  } catch (e) {
    dispatch(todosError(e));
  }
};
