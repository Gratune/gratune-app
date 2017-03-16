import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import Dimensions from 'Dimensions';
import Main from '../sign-in/main';
import { Actions } from 'react-native-router-flux';

const screen = Dimensions.get('window')

var Account = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{flex: 1}}>
          <Text style={styles.title}>
            My Favorites
          </Text>

          <View style={styles.card}>

            <Text style={styles.text}>
              See your favorite venues{"\n"}
              (Coming Soon)
            </Text>

          </View>


        </ScrollView>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#30323D',
    padding: 20,
    paddingTop: 64
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    height: 225,
    opacity: 0.9
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    padding: 20
  },
  text: {
    color: '#fff',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 19,
  }
})

var mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

module.exports = connect(mapStateToProps)(Account)
