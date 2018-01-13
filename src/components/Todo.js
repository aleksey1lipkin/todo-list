import React from 'react';
import ChangeItemForm from '../containers/ChangeItemForm';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showInput: false
		}
	this.toggleChangeForm = this.toggleChangeForm.bind(this);
	}
	toggleChangeForm() {
		this.setState ({
			showInput: !this.state.showInput
		})
	}
	render() {
		if (this.state.showInput) {
			return (
			<li
				className='list-group-item d-flex flex-row align-items-center' >
				<button onClick={this.props.onClick} type="button" className="btn btn-secondary btn-circle mr-3">
					<i className="fa fa-check"></i>
				</button>
					<ChangeItemForm id={this.props.id} toggleChangeForm={this.toggleChangeForm}/>
						<button onClick={this.props.onDelete} type="button" className="close ml-auto" aria-label="Close">
  							<span aria-hidden="true">&times;</span>
						</button>
			</li>
			)
		}
		return (
			<li 
				className='list-group-item d-flex flex-row align-items-center'
				style={{
						backgroundColor: this.props.completed ? '#c3e6cb' : ''
					}} >
				<button onClick={this.props.onClick} type="button" 
						className={this.props.completed ? "btn btn-success btn-circle mr-3" : "btn btn-secondary btn-circle mr-3"} >
					<i className="fa fa-check"></i>
				</button>
					<p
						onDoubleClick={this.toggleChangeForm}
						className='task__text font-weight-bold' >
							{this.props.text}
					</p>
				<button onClick={this.props.onDelete} type="button" className="close ml-auto" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
				</button>
			</li>
		)
	}
}
export default Todo
