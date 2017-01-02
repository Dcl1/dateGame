import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	Image,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';


module.exports = React.createClass({


	getInitialState: function(){

		return {
			hide : true
		};

	},

	dismissModal: function(){

		this.setState({
			hide: true
		});

	},



	render: function(){

		if(this.state.hide) {
			return (
				<View>
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
					<TouchableHighlight onPress={this.dismissModal} >
						<Text>
							Hide
						</Text>
					</TouchableHighlight>
					<Text>
						Exit
					</Text>
				</View>
			);
		}


	}

});


var styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	}

});