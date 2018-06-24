import { connect } from 'react-redux';

import ToDoList from '../components/ToDoList';
import { removeTodoRequest } from '../../state/todo/actions';
import { getToDos } from '../../state/todo/selectors';

const mapDispatchToProps = dispatch => ({
  removeToDo: todo => dispatch(removeTodoRequest(todo))
});

const mapStateToProps = state => ({
  todos: getToDos(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
