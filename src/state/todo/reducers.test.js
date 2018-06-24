import todoReducer from './reducers';
import types from './types';

describe('todos reducer', () => {
  it('should handle ADD_TODO_REQUEST', () => {
    expect(
      todoReducer([], {
        type: types.ADD_TODO_REQUEST,
        todo: 'Some todo'
      })
    ).toEqual({ data: ['Some todo'] });
  });
});
