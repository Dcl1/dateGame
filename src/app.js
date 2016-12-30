import React, { Component } from 'react';
import { createStore , applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as storage from 'redux-storage';