'use strict';

import React, { Component, Navigator } from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

import StartScreen from './components/startScreen';
import Chat from './containers/chatContainer';
import Exit from './components/exitModal';


import { Router, Scene, Actions, Schema, Animations } from 'react-native-router-flux';
import { connect } from 'react-redux';


module.exports = React.createClass({


	callModal: function(){
		Actions.Exit();
	},

	render: function(){
		return (
			<Router>
		

			<Scene key='roots' style={styles.container}>
				<Scene key='quiz' title='Take the quiz' >
					<Scene key="StartScreen" component={StartScreen} initial={true} hideNavBar={true} />
					<Scene key="Chat" component={Chat} hideNavBar={false} onBack={this.backCall} />
				</Scene>
				<Scene key="Exit" type="modal" component={Exit} />
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

//	<Schema name="modal" sceneConfig={Navigator.sceneConfig.FloatFromBottom} />