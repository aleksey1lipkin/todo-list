import React from 'react';
import { connect } from 'react-redux';
import { changeTodo } from '../actions';

class ChangeItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.changeTodoItem = this.changeTodoItem.bind(this);
		this.closeChangeItemForm = this.closeChangeItemForm.bind(this);
	}
	componentDidMount() {
		this.input.focus();
	}
	closeChangeItemForm() {
		this.props.toggleChangeForm();
	}
	changeTodoItem(e) {
		e.preventDefault();
			this.props.dispatch(changeTodo(this.props.id, this.input.value))
			this.input.value = '';
			this.props.toggleChangeForm();
	}
	render() {
		return(
			<form 
				onSubmit={this.changeTodoItem}
				onBlur={this.closeChangeItemForm}
				className='' >
				<input
					className='changetask-input'
					type='text'
					ref={el => {
						this.input = el
					}} />
			</form>
		)
	}
}
ChangeItemForm = connect()(ChangeItemForm);
export default ChangeItemForm
