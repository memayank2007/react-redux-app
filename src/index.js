import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import allReducers from './reducers'


 const store = createStore(allReducers);

const app = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
	<App /> 
	</Provider>
	, app);




