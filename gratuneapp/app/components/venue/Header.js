import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native'

import {changeText} from '../../actions';

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

var Header = React.createClass({
  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>{this.props.page}</Text>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  containerHeader: {
    backgroundColor: '#30323D',
    width: width,
    padding: 16,
    paddingTop: 20,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4D5061',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20
  }
});

var mapStateToProps = (state) => {
  return {
    headertext: state.headertext,
    page: state.page,
  }
}

module.exports = connect(mapStateToProps)(Header)
