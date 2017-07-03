import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDimensionBasics extends Component {
	render() {
		return(
			<View style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: 'powderblue'}}/>
				<View style={{flex: 1, backgroundColor: 'steelblue' }}/>
			</View>
		);
	}
}

module.exports = FlexDimensionBasics;