import React, { Component } from 'react';
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} = require('react-native');
import { Actions } from 'react-native-router-flux';




export default class Home extends Component {
  render() {
    return (
      <View style={styles.viewer}>
        <Text style={styles.controlText}>This is PageOne!</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  viewer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  controlText: {
    color: 'white',
    margin: 128,
  },
})
