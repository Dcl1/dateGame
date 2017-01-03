'use strict';

import React, {Component} from 'react';

import Chat from '../components/chat1';

import * as ChatActions from '../actions/chatActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ChatContainer extends Component {

	constructor(props) {
		super(props);
	}

	render(){
		const { state, actions } = this.props;
		//var clist = state.chat.clist;

		return (
			<Chat
				{...actions}
			/>
		);

	}

}


export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators(Object.assign({}, ChatActions), dispatch)
	})
)(ChatContainer);