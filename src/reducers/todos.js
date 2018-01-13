const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO' :
			return [
				...state, 
				{
					id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					text: action.text,
					completed: false
				}
			];		
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id !== action.id) ?
					todo
				: Object.assign({},
					todo, {
						completed: !todo.completed
					}));
		case 'CHANGE_TODO':
			return state.map(todo =>
				(todo.id !== action.id) ?
					todo
				: Object.assign({},
					todo, {
						text: action.text
					}));
		case 'DELETE_TODO':
			return state.filter(todo =>
				todo.id !== action.id
			);
		default:
			return	state
	}
}
export default todos

