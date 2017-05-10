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
            My Account
          </Text>

          <View style={styles.card}>
            <Image source={{uri: "https://sunriseprowebsites.com/backstage/app/views/client/lutfi-cloud/lutfi-file/images/avatar.png"}} style={styles.image}>
            </Image>

            <View>
              <TouchableOpacity
                onPress={Actions.loginPage}
                activeOpacity={0.9}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
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
  image: {
    position: 'absolute',
    top: 25,
    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    padding: 20
  },
  button: {
    marginTop: 125,
    backgroundColor: '#3f9bf0',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  }
})

var mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

module.exports = connect(mapStateToProps)(Account)
