import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '../Button';

const propTypes = {
  addToDo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toDoValue: PropTypes.string.isRequired
};

const AddToDoForm = ({ addToDo, handleChange, toDoValue }) => (
  <form onSubmit={addToDo}>
    <input className="todo-input" name="todo" onChange={handleChange} value={toDoValue} />
    <Button>Add</Button>
  </form>
);

AddToDoForm.propTypes = propTypes;
export default AddToDoForm;
