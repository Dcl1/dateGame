'use strict';

import React, { Component, Navigator } from 'react';
import {
	Text,
	StyleSheet,
	Alert
} from 'react-native';

import StartScreen from './components/startScreen';
import Chat from './containers/chatContainer';
//import Exit from './components/exitModal';


import { Router, Scene, Actions, Schema, Animations } from 'react-native-router-flux';
import { connect } from 'react-redux';


module.exports = React.createClass({


	callModal: function(){
		//Actions.Exit();
		Alert.alert(
			'Leaving?',
			"If you leave, you will lose your progress",
			[
				{text: 'Exit', onPress: () => Actions.pop() },
				{text: 'Continue Quiz', onPress: () => console.log() }
			]
		)
	},

	render: function(){
		return (
			<Router>
				<Scene key='root' style={styles.container}>
					<Scene key='quiz' title='Take the quiz' >
						<Scene key="StartScreen" component={StartScreen} initial={true} hideNavBar={true} />
						<Scene key="Chat" component={Chat} hideNavBar={false} onBack={()=> this.callModal() } />
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

//	<Schema name="modal" sceneConfig={Navigator.sceneConfig.FloatFromBottom} />