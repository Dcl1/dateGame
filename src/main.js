'use strict';

import React, { Component } from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

import StartScreen from './components/startScreen';
import Chat from './containers/chatContainer';


import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


module.exports = React.createClass({

	render: function(){
		return (
			<Router>
			<Scene key='roots' style={styles.container}>
				<Scene key='quiz' title='Take the quiz' >
					<Scene key="StartScreen" component={StartScreen} initial={true} hideNavBar={true} />
					<Scene key="Chat" component={Chat} hideNavBar={false} />
				</Scene>
			</Scene>
			</Router>
		);
	}

});


var styles = StyleSheet.create({
	container: {
		backgroundColor: 'aliceblue'
	}
});