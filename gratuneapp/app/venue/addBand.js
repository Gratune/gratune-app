import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class addBand extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Add a Band!</Text>
      </View>
    )
  }
}
