import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDirectionBasics extends Component {
	render() {
		return(
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<View style={{flex: 1, backgroundColor: 'powderblue'}}/>
					<View style={{flex: 10, backgroundColor: 'steelblue' }}/>
				</View>
				<View style={{flex: 1}}>
				</View>
			</View>
		);
	}
}

module.exports = FlexDimensionBasics;