import * as types from '../constants/type';
import { setLocalStorage } from '../utilities/addlocalStorage';

export const createTodo = (value) => {
  setLocalStorage(value, 'todos');
  return {
    type: types.ADD_TODO,
    payload: value,
  };
};

export const editTodo = (value) => ({
  type: types.EDIT_TODO,
  payload: value,
});

export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  payload: id,
});