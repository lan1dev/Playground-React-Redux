import { combineReducers } from 'redux';
import types from './types';

const data = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO_REQUEST:
      return [...state, action.todo];
    case types.REMOVE_TODO_REQUEST:
      return state.filter(todo => todo !== action.todo);
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  data
});

export default todosReducer;
