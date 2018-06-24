import { connect } from 'react-redux';

import ToDoForm from '../forms/ToDoForm';
import { addTodoRequest } from '../../state/todo/actions';

const mapDispatchToProps = dispatch => ({
  addToDo: todo => dispatch(addTodoRequest(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(ToDoForm);
