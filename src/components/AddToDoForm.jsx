import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

const propTypes = {
  addToDo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toDoValue: PropTypes.string.isRequired
};

const AddToDoForm = ({ addToDo, handleChange, toDoValue }) => (
  <form onSubmit={addToDo}>
    <Input className="todo-input" name="todo" onChange={handleChange} value={toDoValue} />
    <Button>Add</Button>
  </form>
);

AddToDoForm.propTypes = propTypes;
export default AddToDoForm;
