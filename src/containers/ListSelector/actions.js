import axios from 'axios';
import * as ACTIONS from './action_types';
const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

// Create a new empty list in the applcation
export const createListSuccess = list => {
  return {
    type: ACTIONS.CREATE_LIST,
    payload: { list }
  };
};

// initialize the lists
export const initLists = lists => {
  return {
    type: ACTIONS.INIT_LISTS,
    payload: lists
  };
};

// set activeList
export const setActiveList = listItemWithList => ({
  type: ACTIONS.SET_ACTIVE,
  payload: listItemWithList
});

// create a todo list
export const createListItemSuccess = listItem => {
  return {
    type: ACTIONS.CREATE_LIST_ITEM,
    payload: { listItem }
  };
};

// update ListItem
export const updateListItemSuccess = (listItem, index) => {
  return {
    type: ACTIONS.UPDATE_LIST_ITEM,
    payload: {
      index,
      listItem
    }
  };
};

// delete a todo
export const deleteListItemSuccess = index => {
  return {
    type: ACTIONS.DELETE_LIST_ITEM,
    payload: index
  };
};

// Send the post request to make the new list on the backend
export const createList = name => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.post(`${url}/lists`, { name }, header);
    dispatch(createListSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const readAllLists = () => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.get(`${url}/lists`, header);
    dispatch(initLists(res.data));
    if (!getState().listState.activeList.name) {
      let list = await axios.get(`${url}/lists/${res.data[0]._id}`, header);
      dispatch(setActiveList({ ...res.data[0], list: list.data.todos }));
    }
  } catch (e) {
    console.log(e);
  }
};

//
export const readList = list => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.get(`${url}/lists/${list._id}`, header);
    res.data.todos = res.data.todos.map(todo => {
      return todo;
    });
    list.list = res.data.todos;
    return dispatch(setActiveList(list));
  } catch (err) {
    // just log err for now TODO handle appropriatley
    console.log(err);
  }
};

// POST request to lists/:id then subsequent GET request to /lists update lists view
export const createListItem = (list, text) => async (dispatch, getState) => {
  const { _id } = list;
  const header = getHeader(getState);
  try {
    let res = await axios.post(`${url}/lists/${_id}`, { text }, header);
    dispatch(createListItemSuccess(res.data.newTodo));
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
  dispatch(deleteListItemSuccess(index));
  const header = getHeader(getState);
  try {
    await axios.delete(`${url}/lists/${listId}/${listItemId}`, header);
    let res2 = await axios.get(`${url}/lists`, header);
    dispatch(initLists(res2.data));
  } catch (e) {
    console.log(e);
  }
};

export const updateListItem = (text, id, index) => async (
  dispatch,
  getState
) => {
  dispatch(updateListItemSuccess(text, index));
  const header = getHeader(getState);
  try {
    let res = await axios.put(`${url}/lists/listitem/${id}`, { text }, header);
    let todo = res.data;
    dispatch(updateListItemSuccess(todo.text, index));
  } catch (e) {
    // if syncing did not occur, will handle errors at a later time
    //
    // TODO: handle errors better
    //
    console.log(e);
  }
};
