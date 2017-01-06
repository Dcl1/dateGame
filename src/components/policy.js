import React from 'react';


import {
	View,
	StyleSheet,
	Text
} from 'react-native';



module.exports = React.createClass({

	render: function(){
		return (
			<View style={styles.container}>
				<View style={styles.textArea}>
					<Text style={styles.header}>
						The App & Policy
					</Text>
					<Text style={styles.body}>
						The information and data displayed in this app was collected through mass surveying of real people. The identity of the participants are anonymous and all participants were paid for their contributions. The information here is representative of the replies of our surveyed group and not the opinions of the app maker. We hope you have enjoyed our app and learned something new.
					</Text>
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
		marginLeft: 8,
		marginRight: 8,
		marginTop: 24
	},


	textArea: {
		flex: 1,
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

});