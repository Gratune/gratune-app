import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native'

import Header from './Header';
import Nav from './Nav';

var Main = React.createClass({
  render() {
    return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text>{this.props.page}</Text>
      </View>
      <Nav />
    </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    padding: 50
  }
});

var mapStateToProps = (state) => {
  return {
    headertext: state.headertext,
    text: state.text,
    page: state.page
  }
}

module.exports = connect(mapStateToProps)(Main)
