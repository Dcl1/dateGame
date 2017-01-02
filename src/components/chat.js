import React from 'react';

import {
	View,
	Text,
	ListView,
	TouchableHighlight,
	StyleSheet,
	Dimensions,
	Navigator
} from 'react-native';


import GiftedMessenger from 'react-native-gifted-messenger';
var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;
import { Actions } from 'react-native-router-flux';

import Questions from '../data/questions.json';


module.exports = React.createClass({

	getInitialState: function(){

		this._file;
		this._fileLength;

		this._question;
		this._step = 1;

		return {
			messages: [],
			usedIds: [],
			typingMessage: '',
			responseUno: 'Response one here',
			responseDeuce: 'Response two here'
		};
	},

	componentWillMount: function(){

		this._file = Questions.questions;

	},

	componentDidMount: function(){
		this._fileLength = this._file.length;
		this.loadQuestions();
	},


	getQuestion: function(){

		var fLength = this._fileLength - 1;		
		var numInt = Math.random() * (fLength - 0) + 0;
		var num = Math.round(numInt);


		var qq = this._file[num];

		return qq;

	},


	loadQuestions: function(){
		console.log(this._file.length);

		var question = this.getQuestion();


		var used = this.state.usedIds;
		used.push(question.id);



		this._question = {
			"text" : question.question,
			"answer" : question.answer,
			"option1" : question.option1,
			"option2" : question.option2
		}

		this.setState({
			usedIds: used
		});


		this.askQuestion(this._question);

	},

	askQuestion: function(question){

		var _this = this;
		var ray = this.addMessages(question);



		setTimeout(() => {
			this.setState({
				typingMessage: 'Typing a message ...',
			});
		}, 400);

		setTimeout(() => {
			this.setState({
				typingMessage: ''
			});
		}, 1000);

		setTimeout(() => {
			this.setState({
				messages: ray
			});
		}, 1300);

	},


	addMessages: function(obj){

		var _this = this;
		var stat = this.state;
		let uni = Math.round(Math.random() * 100000);

		return [
			...stat.messages,
			{
				"text" : obj.text,
				"name" : "",
				"position" : "left",
				"date" : new Date(),
				"uniqueId" : uni 
			}

		]


	},


	render: function(){
		return (
			<GiftedMessenger
				ref={(c) => this._GiftedMessenger = c}

				style={{
					marginTop: 66 + STATUS_BAR_HEIGHT,
				}}

				autoFocus={false}

				messages={this.state.messages}

				handleSend={this.handleSend}

				senderName='PLAYER'
				senderImage={null}
				displayNames={true}

				parseTest={true}
				typingMessage={this.state.typingMessage}
				disabled={false}

				responseOne={this.state.responseUno}
				responseTwo={this.state.responseDeuce}

			/>
		);
	}


});












