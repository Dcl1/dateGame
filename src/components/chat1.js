import React, { Component } from 'react';


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
import MenQuestions from '../data/menQuestions.json';


export default class Chat extends Component {


	constructor(props) {

		super(props);

		this._file;
		this._question;
		this._step;
		this._right;

		this.handleSend = this.handleSend.bind(this);

		this.state = {
			messages: [],
			typingMessage: '',
			answerTime: true,
			responseUno: 'boo',
			responseDeuce: 'boo2'
		}

	}


	increaseStep() {
		this._step +=1;
	}

	callEnding(){

		var _this = this;
		
		var message = _this._right + "/10 CORRECT";


		//var theAnswer = _this.addMessage({"text" : message , "name" : "bot", "position" : "left", "date" : new Date(), "uniqueId" : uni , "image" : require('image!starIcon') });

		for(var i = 0; i < 4; i++ ){
			let uni = Math.round(Math.random() * 100000);
			let theAnswer = _this.addMessage({"text" : message , "name" : "bot", "position" : "left", "date" : new Date(), "uniqueId" : uni , "image" : require('image!starIcon') });
			_this.setState({
				messages: theAnswer
			});			
		}

	}

	addMessage(msg) {

		var messages = this.state.messages;

		var newMessages = messages.concat(msg);

		return newMessages;
	}

	handleSend( message = {} ) {

		var _this = this;
		let uni = Math.round(Math.random() * 100000);
		var theAnswer = _this.addMessage({"text" : message.text , "name" : message.user, "position" : "right", "date" : new Date(), "uniqueId" : uni });

		this.setState({
			messages: theAnswer,
			answerTime: false
		});


		setTimeout(() => {
			if( message.choice === _this._question.answer ){
				_this._right += 1;
				_this.sendResult("Correct!");
			} else {
				_this.sendResult("Wrong!");
			}
		}, 1000);



	}


	componentWillMount() {
		var gender = this.props.gender;
		var _this = this;

		if( gender === 'men' ){
			_this._file = MenQuestions.questions;
		} else {
			_this._file = Questions.questions;
		}
	}


	componentDidMount() {
		this._step = 0;
		this._right = 0;
		this._fileLength = this._file.length;
		this.loadQuestion();
	}

	loadQuestion() {

		var _this = this;




		var fLength = this._fileLength - 1;
		var numInt = Math.random() * fLength;
		var num = Math.round(numInt);
		let uni = Math.round(Math.random() * 100000);

		var question = this._file[num];

		this._question = {
			"text" : question.question,
			"answer" : question.answer,
			"option1" : question.option1,
			"option2" : question.option2,
			"answerText" : question.answerText,
			"user" : "bot"
		}

		var message = this.addMessage({"text" : question.question, "name" : "bot", "position" : "left", "date" : new Date(), "uniqueId" : uni, "image" : require('image!starIcon')  });



		setTimeout(() => {
			this.setState({
				typingMessage: 'Typing a message ...',
			});
		}, 400);

		setTimeout(() => {
			this.setState({
				typingMessage: '',
			});
		}, 2400);	

		setTimeout(() => {

			this.setState({
				messages: message
			});

			_this.needAnswer(question);
		}, 3000);

	}


	needAnswer() {

		var resOne = this._question.option1;
		var resTwo = this._question.option2;

		this.setState({
			responseUno: resOne,
			responseDeuce: resTwo,
			answerTime: true
		});

	}


	sendResult(check) {

		var _this = this;
		var answerText = check + " " + _this._question.answerText;
		let uni = Math.round(Math.random() * 1000000);

		var message = this.addMessage({"text" : answerText , "name" : "bot", "position" : "left", "date" : new Date(), "uniqueId" : uni, "image" : require('image!starIcon')  });



		setTimeout(() => {
			this.setState({
				typingMessage: 'Typing a message ...',
			});
		}, 400);

		setTimeout(() => {
			this.setState({
				typingMessage: '',
			});
		}, 1500);	

		setTimeout(() => {

			this.setState({
				messages: message
			});

			
		}, 1800);	

		setTimeout(() => {
			
			if(_this._step < 9){
				console.log(_this._step);
				_this.increaseStep();
				_this.loadQuestion();
			} else {
				_this.callEnding();
			}


		}, 2400);	

	}




	render() {
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

}