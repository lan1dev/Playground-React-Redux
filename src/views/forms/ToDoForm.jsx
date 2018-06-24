import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '../common/Button';
import InputField from '../common/InputField';
import FlexBox from '../common/FlexBox';

const propTypes = {
  addToDo: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const validate = values => {
  const errors = {};
  if (!values.todo) {
    errors.todo = 'You need to enter a name for your todo!';
  }
  return errors;
};

class ToDoForm extends Component {
  handleSubmit = values => {
    this.props.addToDo(values.todo);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <FlexBox>
          <Field name="todo" label="Add ToDo" component={InputField} type="text" />
          <Button type="submit">Add</Button>
        </FlexBox>
      </form>
    );
  }
}

ToDoForm.propTypes = propTypes;

/* eslint-disable no-class-assign */
ToDoForm = reduxForm({
  form: 'addToDo',
  warn: () => {},
  validate
})(ToDoForm);

export default ToDoForm;
