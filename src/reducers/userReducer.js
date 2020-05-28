import * as types from '../constants/type';
const localData = window.localStorage && localStorage.getItem('users');
const dataJson = localData ? JSON.parse(localData) : [];

const INITIALSTATE = {
  users: dataJson,
  loading: true,
};
const userReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };
    case types.EDIT_USER:
      const editUsers = state.users.map((u) => {
        if (u.key === action.payload.key) {
          return Object.assign({}, u, {
            ...action.payload,
          });
        }
        return u;
      });
      window.localStorage.setItem('users', JSON.stringify(editUsers));
      return {
        ...state,
        loading: false,
        users: editUsers,
      };
    case types.REMOVE_USER:
      const removeUser = state.users.filter(
        (user) => action.payload !== user.key
      );
      window.localStorage.setItem('users', JSON.stringify(removeUser));
      return {
        ...state,
        loading: false,
        users: removeUser,
      };
    default:
      return state;
  }
};

export default userReducer;