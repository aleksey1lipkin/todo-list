import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoListContainer';
const App = () => (
	<div className='container'
		style={{
			maxWidth: '600px'
		}}>
		<AddTodo />
		<TodoListContainer />
	</div>
)

export default App;