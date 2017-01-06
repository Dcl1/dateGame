import React from 'react';
import Button from 'react-native-button';
import Video from 'react-native-video';

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

			<View style={styles.whole} >
				<Video source={{uri: 'bg'}}
					ref={(ref) => {
						this.player = ref
					}}
					rate={1.0}
					volume={0}
					paused={false}
					muted={true}
					resizeMode="contain" 
					repeat={true}
					playInBackground={false}
					playWhenInactive={false}
					style={styles.screen}
				/>
				<View style={styles.container}>
					<View style={styles.textArea}>
						<Text style={styles.header}>
							Test Your Dating Skills
						</Text>
						<Text style={styles.body}>
							200 Men & 200 Women answered questions about their dating preferences. Answer 10 questions and see if you know your stuff? 
						</Text>
					</View>
					<View style={styles.actionArea} >
						<Button
							style={styles.actionButton}
							onPress={ () => Actions.ChooseScreen() }
						>
							Start Quiz
						</Button>
					</View>
				</View>
			</View>
		);
	}


});


var styles = StyleSheet.create({

	whole: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white'
	},

	screen: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		opacity: 0.3
	},

	container: {
		flex: 1,
		flexDirection: 'column',
		margin: 8,
		marginLeft: 8,
		marginRight: 8,
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
		color: 'white'
	}

});



















