import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

export const reducers = combineReducers({
  todo: todoReducer,
  user: userReducer,
});
