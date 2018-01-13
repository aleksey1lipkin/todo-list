import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	render() {
		return (
			<ul className='list-group'>
				{this.props.todos.map(todo => (
					<Todo key={todo.id} {...todo} 
						onClick={() => this.props.onTodoClick(todo.id)}
						onDelete={() => this.props.onTodoDelete(todo.id)} />
					)
				)}
			</ul>
		)
	}
}

export default TodoList
