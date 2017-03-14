import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native';

import {
  changePage1,
  changePage2,
  changePage3,
  changePage4,
  changePage5
} from '../../actions';
import Tabs from 'react-native-tabs';

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

var Nav = React.createClass({
  changePage1() {
    this.props.dispatch(changePage1());
  },
  changePage2() {
    this.props.dispatch(changePage2());
  },
  changePage3() {
    this.props.dispatch(changePage3());
  },
  changePage4() {
    this.props.dispatch(changePage4());
  },
  changePage5() {
    this.props.dispatch(changePage5());
  },
  render() {
    var self = this;
    return (
      <View style={styles.containerNav}>
        <Tabs
          selected={this.props.page}
          style={{backgroundColor:'#30323D'}}
          selectedStyle={{color:'#5C80BC'}}>
          <Text
            onPress={this.changePage1}
            name="Home"
            selectedIconStyle={styles.selectedIconStyle}>
              Home
          </Text>
          <Text
            onPress={this.changePage2}
            name="Schedule"
            selectedIconStyle={styles.selectedIconStyle}>
              Schedule
          </Text>
          <Text
            onPress={this.changePage3}
            name="Stats"
            selectedIconStyle={styles.selectedIconStyle}>
              Stats
          </Text>
          <Text
            onPress={this.changePage4}
            name="Profile"
            selectedIconStyle={styles.selectedIconStyle}>
              Profile
          </Text>
          <Text
            onPress={this.changePage5}
            name="Settings"
            selectedIconStyle={styles.selectedIconStyle}>
              Settings
          </Text>
        </Tabs>
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
  containerNav: {
    backgroundColor: '#F5FCFF',
    width: width,
  },
  selectedIconStyle: {
    borderTopWidth: 2,
    borderTopColor: '#5C80BC'
  },
  main: {
    flex: 1,
    padding: 50
  }
});


var mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

module.exports = connect(mapStateToProps)(Nav)
