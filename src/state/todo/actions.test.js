import { addTodoRequest } from './actions';
import types from './types';

describe('todo actions', () => {
  it('should create an action to add a todo', () => {
    const todo = 'some todo';
    const expectedAction = {
      type: types.ADD_TODO_REQUEST,
      todo
    };
    expect(addTodoRequest(todo)).toEqual(expectedAction);
  });
});
