import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		},
		onTodoDelete: id => {
			dispatch(deleteTodo(id))
		}
}
}

const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)
export default TodoListContainer
