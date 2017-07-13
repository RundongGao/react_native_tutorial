import React, { Component } from 'react';
import { View, TabBarIOS } from 'react-native';

const Feature = require('./component/Feature');

export default class Bookshare extends Component {
   constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

  render() {
    return(
       <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Feature/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Feature/>
                </TabBarIOS.Item>
            </TabBarIOS>
     );
  }
}