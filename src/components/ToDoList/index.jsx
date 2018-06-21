import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeToDo: PropTypes.func.isRequired
};

const ToDoList = ({ todos, removeToDo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li>
        {todo} -{' '}
        <button className="error" name={todo} onClick={removeToDo}>
          Remove
        </button>
      </li>
    ))}
  </ul>
);

ToDoList.propTypes = propTypes;
export default ToDoList;
