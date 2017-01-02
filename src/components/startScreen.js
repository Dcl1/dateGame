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
				<Text>
					Start screen
				</Text>
				<Button
					style={{fontSize: 20, color: 'green'}}
					onPress={ () => Actions.Chat() }
				>
					Start Quiz
				</Button>
			</View>
		);
	}


});


var styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	}

});