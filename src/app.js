import React, { Component } from 'react';
import { createStore , applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import * as reducers from './reducers';

import Main from './main';


const reducer = storage.reducer(combineReducers(reducers));
const engine = createEngine('dateApp1');
const storageMiddleware = storage.createMiddleware(engine);

let middleware = [thunk, storageMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);

load(store)
	.then((newState) => console.log('Loaded state: ', newState))
	.catch(() => console.log('Failed to load previous state'));


module.exports = React.createClass({
	render: function(){
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
});