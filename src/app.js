import React, { Component } from 'react';
import { createStore , applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import * as reducers from './reducers';


const reducer = storage.reducer(combineReducers(reducers));
const engine = createEngine('dateApp1');
const storageMiddleware = storage.createMiddleware(engine);

let middleware = [thunk]