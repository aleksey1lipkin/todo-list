import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {
	let input

	return (
		<div className='form-group'>
			<h1 
				className='text-center' >
				Todo LIST
			</h1>
			<form
				className='row form'
				onSubmit={e => {
					e.preventDefault();
					if (input.value.trim()) {
						dispatch(addTodo(input.value))
						input.value = ''
					}}	
				}>
				<input 
					className='form-control col-sm-8'
					type='text'
					placeholder='Add new task'
					ref={text => {
						input = text
					}} 
				/>
				<button 
					type='submit'
					className='btn btn-primary col-sm-4'>
					Add new task
				</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo);
export default AddTodo
