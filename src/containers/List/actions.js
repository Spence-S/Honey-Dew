import axios from 'axios';
import * as ACTIONS from './action_types';

import { getAllLists } from '../manager/list_actions';
const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({
  headers: { 'x-auth': getState().authState.token }
});

export const updateListItemSuccess = (listItem, index) => {
  return {
    type: ACTIONS.UPDATE_LIST_ITEM,
    payload: {
      index,
      listItem
    }
  };
};

export const createListItemSuccess = listItem => {
  return {
    type: ACTIONS.CREATE_LIST_ITEM,
    payload: { listItem }
  };
};

export const deleteListItemSuccess = index => {
  return {
    type: ACTIONS.DELETE_LIST_ITEM,
    payload: index
  };
};

export const showTodosError = payload => {
  return {
    type: ACTIONS.LIST_ITEM_ERROR,
    payload
  };
};

export const editListItem = (text, id, index) => async (dispatch, getState) => {
  dispatch(updateListItemSuccess(text, index));
  console.log(`text: ${text} \n id: ${id} \n index: ${index}`);
  const header = getHeader(getState);
  try {
    let res = await axios.put(`${url}/lists/listitem/${id}`, { text }, header);
    //ensure syncing with api
    console.log(res);
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

export const createListItem = text => async (dispatch, getState) => {
  const header = getHeader(getState);
  try {
    let res = await axios.post(`${url}/api`, { text }, header);
    dispatch(createListItemSuccess(res.data));
  } catch (e) {
    dispatch(showTodosError(e));
  }
};

export const deleteListItem = (_id, index) => async (dispatch, getState) => {
  dispatch(deleteListItemSuccess(index));
  const header = getHeader(getState);
  try {
    await axios.delete(`${url}/lists/listitem/${_id}`, header);
    getAllLists();
  } catch (e) {
    dispatch(showTodosError(e));
  }
};
