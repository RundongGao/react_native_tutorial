import React, { Component } from 'react';
import { View } from 'react-native';

const HelloWorld = require('./component/HelloWorld');
const Greetings = require('./component/Greetings');
const Blink = require('./component/Blink');
const Banana = require('./component/Banana');
const LotsOfStyles = require('./component/LotsOfStyles');
const FlexDimensionBasics = require('./component/FlexDimensionBasics');

export default class Main extends Component {
  render() {
    return(
      <View style={{flex: 10}}>
        <View style={{flex: 1}}>
          <HelloWorld/>
          <Blink text='aha!!'/>
          <Greetings name='gao' />
          
          <Banana/>
          <LotsOfStyles/>
        </View>
        <FlexDimensionBasics style={{flex: 3}}/>
      </View>
     );
  }
}
