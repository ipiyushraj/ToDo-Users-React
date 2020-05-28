import * as types from '../constants/type';
import { setLocalStorage } from '../utilities/addlocalStorage';

export const createUser = (value) => {
  setLocalStorage(value, 'users');
  return {
    type: types.ADD_USER,
    payload: value,
  };
};

export const editUser = (value) => ({
  type: types.EDIT_USER,
  payload: value,
});

export const removeUser = (id) => ({
  type: types.REMOVE_USER,
  payload: id,
});
