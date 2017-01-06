'use strict';

import React, { Component, Navigator } from 'react';
import {
	Text,
	StyleSheet,
	Alert
} from 'react-native';

import StartScreen from './components/startScreen';
import Chat from './containers/chatContainer';
import Choose from './components/chooseGender';
import Policy from './components/policy';
//import Exit from './components/exitModal';


import { Router, Scene, Actions, Schema, Animations } from 'react-native-router-flux';
import { connect } from 'react-redux';


module.exports = React.createClass({

	goBack: function(){
		Actions.pop()
		Actions.StartScreen()
	},

	callInfo: function(){
		Actions.Policy()
	},

	callModal: function(){
		//Actions.Exit();
		Alert.alert(
			'Leaving?',
			"If you leave, you will lose your progress",
			[
				{text: 'Exit', onPress: () => this.goBack() },
				{text: 'Continue Quiz', onPress: () => console.log() }
			]
		)
	},

	render: function(){
		return (
			<Router>
				<Scene key='root' style={styles.container}>
					<Scene key='quiz' title='Take the quiz' navigationBarStyle={styles.navBar} >
						<Scene key="StartScreen" component={StartScreen} hideBackImage={true} navigationBarStyle={styles.navBarNo} initial={true} hideNavBar={false} rightButtonImage={require('image!info')} onRight={() => this.callInfo()}  />
						<Scene key="ChooseScreen" component={Choose} hideNavBar={false} navigationBarStyle={styles.navBarNo} />
						<Scene key="Chat" component={Chat} hideNavBar={false} onBack={()=> this.callModal() } />
						<Scene key="Policy" component={Policy} navigationBarStyle={styles.navBar} />
					</Scene>
				</Scene>
			</Router>
		);
	}

});


var styles = StyleSheet.create({
	container: {
		backgroundColor: 'aliceblue'
	},

	navBarNo: {
		backgroundColor: 'white',
		borderColor: 'white',
		borderBottomColor: 'white'
	},

	navBar: {
		backgroundColor: 'white'
	}
});

//	<Schema name="modal" sceneConfig={Navigator.sceneConfig.FloatFromBottom} />


















