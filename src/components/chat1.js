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


export default class Chat extends Component {


	constructor(props) {

		super(props);

		this._file;
		this._question;

		this.state = {
			messages: [],
			typingMessage: '',
			answerTime: true,
			responseUno: 'boo',
			responseDeuce: 'boo2'
		}

	}

	addMessage(msg) {

		var messages = this.state.messages;

		var newMessages = messages.concat(msg);
		console.log(newMessages);

		return newMessages;
	}


	componentWillMount(){
		this._file = Questions.questions;
	}


	componentDidMount() {
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

		var message = this.addMessage({"text" : question.question, "name" : "bot", "position" : "left", "date" : new Date(), "uniqueId" : uni });



		setTimeout(() => {
			this.setState({
				typingMessage: 'Typing a message ...',
			});
		}, 400);

		setTimeout(() => {
			this.setState({
				typingMessage: '',
			});
		}, 1000);	

		setTimeout(() => {

			this.setState({
				messages: message
			});

			_this.needAnswer(question);
		}, 1300);

	}


	needAnswer() {

		var resOne = this._question.option1;
		var resTwo = this._question.option2;

		this.setState({
			responseUno: resOne,
			responseDeuce: resTwo
		});

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