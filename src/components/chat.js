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
			answerTime: false,
			responseUno: 'Response one here',
			responseDeuce: 'Response two here'
		};
	},

	componentWillMount: function(){

		this._file = Questions.questions;

	},

	componentDidMount: function(){
		this._fileLength = this._file.length;
		this.loadQuestion();
	},


	increaseStep: function() {

		this._step += 1;

	},


	getQuestion: function(){

		var fLength = this._fileLength - 1;		
		var numInt = Math.random() * (fLength - 0) + 0;
		var num = Math.round(numInt);


		var qq = this._file[num];

		return qq;

	},


	loadQuestion: function(){
		console.log(this._file.length);
		console.log("step " + this._step);

		var question = this.getQuestion();


		var used = this.state.usedIds;
		used.push(question.id);



		this._question = {
			"text" : question.question,
			"answer" : question.answer,
			"option1" : question.option1,
			"option2" : question.option2,
			"answerText" : question.answerText,
			"user" : "bot"
		}

		this.setState({
			usedIds: used,
			answerTime: false
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

			console.log(ray);

			_this.needAnswer(question);
		}, 1300);

	},


	needAnswer: function(question){

		var resOne = question.option1;
		var resTwo = question.option2;

		this.setState({
			responseUno: resOne,
			responseDeuce: resTwo,
			answerTime: true
		});

	},


	addMessages: function(obj){

		var _this = this;
		//var stat = this.state;
		let uni = Math.round(Math.random() * 100000);
		var position;
		var user = obj.user;


		if(user.toUpperCase() === 'PLAYER' ) {	
			console.log("It is player");
			position = "right"
		} else {
			console.log("It is not player");
			position = "left"
		}

		console.log(_this.state.messages);
		return [
			..._this.state.messages,
			{
				"text" : obj.text,
				"name" : "",
				"position" : position,
				"date" : new Date(),
				"uniqueId" : uni 
			}

		]
	},


	handleSend: function( message = {} ) {

		var _this = this;
		var question = this._question;
		console.log(message);

		var ray = this.addMessages(message);
		console.log(ray);

		this.setState({
			messages: ray
		});

		console.log(_this.state.messages);

		if( message.choice === question.answer ){
			console.log("ANSWER IF RIGHT!");
			_this.sendResult("Correct!");
		} else {
			console.log("ANSWER IS WRONG");
			_this.sendResult("Wrong!");
		}

	},


	sendResult: function(check){
		var question = this._question;
		var text = check + " " + question.answerText;
		console.log(text);
		var message = {
			"text" : text,
			"user" : "bot"
		}

		var ray = this.addMessages(message);



		this.setState({
			messages: ray
		})


		this.loadQuestion();

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
				disabled={this.state.answerTime ? false : true}

				responseOne={this.state.responseUno}
				responseTwo={this.state.responseDeuce}

			/>
		);
	}


});












