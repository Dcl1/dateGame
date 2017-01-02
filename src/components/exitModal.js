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

	render: function(){
		return (
			<View style={styles.container}>
				<Text>
					Exit
				</Text>
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