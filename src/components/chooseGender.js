import React from 'react';
import Button from 'react-native-button';

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

	render: function(){
		return (
			<View style={styles.container}>
				<View style={styles.textArea}>
					<Text style={styles.header}>
						Do you prefer to date men or women?
					</Text>
					<Text style={styles.body}>
						200 Men & 200 Women answered questions about their dating preferences. Answer 12 questions and see if you know your stuff? 
					</Text>
				</View>
				<View style={styles.actionArea} >
					<Button
						style={styles.actionButton}
						onPress={ () => Actions.Chat({gender: 'men'}) }
					>
						Men
					</Button>
					<Button
						style={styles.actionButton}
						onPress={ () => Actions.Chat({gender: 'women'}) }
					>
						Women
					</Button>
				</View>
			</View>
		);
	}

});


var styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column',
		margin: 8,
		marginTop: 24
	},

	textArea: {
		flex: 2,
		justifyContent: 'center',
		padding: 12,
		borderRadius: 6,
		backgroundColor: 'white'

	},

	header: {
		fontFamily: 'Poppins-Light',
		textAlign: 'left',
		fontSize: 44,
		lineHeight: 54
	},

	body: {
		fontFamily: 'Poppins-Light',
		textAlign: 'left',
		fontSize: 14
	},

	actionArea: {
		flex: 1,
		justifyContent: 'center'
	},

	actionButton: {
		fontSize: 20,
		backgroundColor: '#F75353',
		padding: 8,
		paddingTop: 12,
		paddingBottom: 12,
		borderRadius: 6,
		color: 'white',
		marginTop: 16
	}

});