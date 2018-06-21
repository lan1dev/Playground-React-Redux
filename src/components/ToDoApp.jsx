import React, { Component, Fragment } from 'react';
import Title from './Title';
import AddToDoForm from './AddToDoForm';
import ToDoList from './ToDoList';
import Error from './Error';
import ToDoListWrapper from './ToDoListWrapper';

class App extends Component {
  state = {
    todos: [],
    fields: {
      todo: ''
    },
    fieldsError: ''
  };

  handleCreate = event => {
    event.preventDefault();

    if (this.state.fields.todo.length) {
      this.setState({ todos: [this.state.fields.todo, ...this.state.todos] });
    } else {
      this.setState({
        fieldsError: 'You need to enter a name for the todo!'
      });
    }

    this.setState({ fields: { todo: '' } });
  };

  handleChange = event => {
    this.setState({ fields: { [event.target.name]: event.target.value } });
  };

  handleRemove = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => todo !== event.target.name)
    });
  };

  render() {
    return (
      <Fragment>
        <Title>ToDo</Title>
        <ToDoListWrapper>
          <AddToDoForm
            addToDo={this.handleCreate}
            handleChange={this.handleChange}
            toDoValue={this.state.fields.todo}
          />
          {this.state.fieldsError && <Error>{this.state.fieldsError}</Error>}
          <ToDoList todos={this.state.todos} removeToDo={this.handleRemove} />
        </ToDoListWrapper>
      </Fragment>
    );
  }
}

export default App;
