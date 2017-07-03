import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDirectionBasics extends Component {
	render() {
		return(
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<View style={{ backgroundColor: 'powderblue'}}/>
					<View style={{ backgroundColor: 'steelblue' }}/>
				</View>
				<View style={{flex: 2}}>
				</View>
			</View>
		);
	}
}

module.exports = FlexDimensionBasics;