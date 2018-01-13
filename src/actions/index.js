export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}
export const changeTodo = (id, text) => {
	return {
		type: 'CHANGE_TODO',
		id,
		text
	}
}
export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		id
	}
}