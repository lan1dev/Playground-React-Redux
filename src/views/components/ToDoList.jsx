import React from 'react';
import PropTypes from 'prop-types';
import List from '../common/List';
import Button from '../common/Button';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeToDo: PropTypes.func.isRequired
};

const ToDoList = ({ todos, removeToDo }) => (
  <List>
    {todos.map(todo => (
      <li key={todo}>
        {todo} -{' '}
        <Button error name={todo} onClick={({ target: { name } }) => removeToDo(name)}>
          Remove
        </Button>
      </li>
    ))}
  </List>
);

ToDoList.propTypes = propTypes;
export default ToDoList;
