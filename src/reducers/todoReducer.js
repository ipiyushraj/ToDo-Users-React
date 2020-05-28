import * as types from '../constants/type';

const localData = window.localStorage && localStorage.getItem('todos');
const dataJson = localData ? JSON.parse(localData) : [];

const INITIALSTATE = {
  todos: dataJson,
  loading: true,
};
const todoReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case types.EDIT_TODO:
      const editTodos = state.todos.map((u) => {
        if (u.key === action.payload.key) {
          return Object.assign({}, u, {
            ...action.payload,
          });
        }
        return u;
      });
      window.localStorage.setItem('todos', JSON.stringify(editTodos));
      return {
        ...state,
        loading: false,
        todos: editTodos,
      };
    case types.REMOVE_TODO:
      const removeTodos = state.todos.filter(
        (todo) => action.payload !== todo.key
      );
      window.localStorage.setItem('todos', JSON.stringify(removeTodos));
      return {
        ...state,
        loading: false,
        todos: removeTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;