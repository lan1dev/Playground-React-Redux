import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Button from './Button';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeToDo: PropTypes.func.isRequired
};

const ToDoList = ({ todos, removeToDo }) => (
  <List>
    {todos.map(todo => (
      <li>
        {todo} -{' '}
        <Button error name={todo} onClick={removeToDo}>
          Remove
        </Button>
      </li>
    ))}
  </List>
);

ToDoList.propTypes = propTypes;
export default ToDoList;
