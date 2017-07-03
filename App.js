import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const HelloWorld = require('./component/HelloWorld');
const Greetings = require('./component/Greetings');
const Blink = require('./component/Blink');
const Banana = require('./component/Banana');
const LotsOfStyles = require('./component/LotsOfStyles');
const FlexDimensionBasics = require('./component/FlexDimensionBasics');

export default class Main extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <HelloWorld/>
        <Blink text='aha!!'/>
        <Greetings name='gao'/>
        <Greetings name='lan'/>
        <Banana/>
        <LotsOfStyles/>
        <FlexDimensionBasics/>
      </View>
     );
  }
}
