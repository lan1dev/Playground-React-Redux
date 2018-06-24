import types from './types';

export const loadTodosRequest = () => ({
  type: types.LOAD_TODOS_REQUEST
});
export const removeTodoRequest = todo => ({
  type: types.REMOVE_TODO_REQUEST,
  todo
});
export const addTodoRequest = todo => ({
  type: types.ADD_TODO_REQUEST,
  todo
});

export default {
  loadTodosRequest,
  removeTodoRequest,
  addTodoRequest
};
