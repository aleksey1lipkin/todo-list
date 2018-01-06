import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var initialState = [];
initialState.push({text: 'task 1', complete: false});
initialState.push({text: 'task 2', complete: false});

class TasksList extends React.Component {
	render () {
		var items = this.props.items.map((item, index) => {
			return (
				<TasksListItem key={index} item={item} index={index} 
					removeItem={this.props.removeItem}
					completeItem={this.props.completeItem}
					changeItem={this.props.changeItem} />
			);
		});
		return (
			<ul className='app__list'>
				{items}
			</ul>)
	}
}
class TasksListItem extends React.Component {
	 constructor(props) {
    	super(props);
    	this.state = {
    		showChangeInput: false
    	}
    	this.onClickClose = this.onClickClose.bind(this);
    	this.onClickComplete = this.onClickComplete.bind(this);
    	this.onClickChange = this.onClickChange.bind(this);
    	this.visible = this.visible.bind(this);
  	}
  	onClickClose() {
  		var index = this.props.index;
  		this.props.removeItem(index);
  	}
  	onClickComplete() {
  		var index = this.props.index;
  		this.props.completeItem(index);
  	}
  	onClickChange(event) {
		this.setState({
			showChangeInput: true
		})
  	}
  	visible() {
  		this.setState({
  			showChangeInput: false
  		})
  	}
	render () {
		var todoItemClass = this.props.item.complete ?
			'app__text app__text_completed' : 'app__text app__text_uncompleted';
		return(
			<li className='app__item'>
				<p className={todoItemClass}
				onDoubleClick={this.onClickChange}>
				{this.props.item.text}
					</p>
					{this.state.showChangeInput ? 
						<ChangeTaskInput item={this.props.item} index={this.props.index} changeItem={this.props.changeItem} visible={this.visible} /> : null}
					<div className='switch'>
						<button onClick={this.onClickClose} className='button switch__button switch__button_close' >Close task</button>
							<button onClick={this.onClickComplete} className='button switch__button switch__button_complete' >Complete task</button>
					</div>
			</li>
		)
	}
}
class ChangeTaskInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			changeItemFormVisible: true
		}
		this.changeItemSubmit = this.changeItemSubmit.bind(this);
	}
	changeItemSubmit(event, index) {
		event.preventDefault();
		var index = this.props.index;
		var newTaskText = this.changeItemText.value;
		this.props.changeItem(newTaskText, index);
		this.setState({
			changeItemFormVisible: false
		});
		this.props.visible();
	}
	render () {
		if (this.state.changeItemFormVisible) {
			return (
				<form onSubmit={this.changeItemSubmit}>
							<input ref={e => this.changeItemText = e} />
						</form>
			)
		} else 
			return null
	}
}
class CreateNewTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: initialState
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.completeItem = this.completeItem.bind(this);
		this.changeItem = this.changeItem.bind(this);
	};
	onSubmit(event) {
		event.preventDefault();
		var tasksArray = this.state.todoList;
		if (this.inputText.value) {
			tasksArray.unshift({
				text: this.inputText.value,
				complete: false
			});
			this.setState({
				todoList: tasksArray
			})
			this.inputText.value = "";
		}
	};
	removeItem(itemIndex) {
		this.state.todoList.splice(itemIndex, 1);
		this.setState({
			todoList: this.state.todoList
		})
	};
	completeItem(itemIndex) {
		var todo = this.state.todoList[itemIndex];
		todo.complete = !todo.complete;
		this.state.todoList.splice(itemIndex, 1, todo);
		this.setState({
			todoList: this.state.todoList
		})
	};
	changeItem(newTaskText, itemIndex) {
		var itemText = this.state.todoList[itemIndex];
			itemText.text = newTaskText;
		 		this.state.todoList.splice(itemIndex, 1, itemText);
		 			this.setState({
		 				todoList: this.state.todoList
		 			})
		};
		render() {
			return (
				<div className='app'>
					<h1 className='app__header'>To do list</h1>
						<form onSubmit={this.onSubmit} className='form'>
							<input
							placeholder='Enter your task'
							className='form__input'
							type='text'
							ref={el => this.inputText = el} />
								<button
								className='button form__button'
								type='submit'>
								Enter
								</button>
						</form>
						<TasksList items={this.state.todoList}
							removeItem={this.removeItem}
							completeItem={this.completeItem}
							changeItem={this.changeItem} />
				</div>	
			);
		}
};


class App extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<div className='container'>	
						<CreateNewTask />
				</div>
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);