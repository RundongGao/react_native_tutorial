import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
	bigblue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red'
	},
});

class LotsOfStyles extends Component {
	render() {
		return(
			<View>
				<Text style={style.red}>just red</Text>
				<Text style={style.bigblue}>just bigblue</Text>
				<Text style={[style.red, style.bigblue]}>red, then bigblue</Text>
				<Text style={[style.bigblue, style.red]}>bigblue, the red</Text>
			</View>
		);
	}
}

module.exports = LotsOfStyles;