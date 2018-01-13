import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import todoApp from './reducers';
import App from './components/App';
import './index.css'

const enhancer = compose(
	persistState()
)

let store = createStore(todoApp, enhancer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
