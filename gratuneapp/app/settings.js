// app/settings.js

const React = require('react');
const SideMenu = require('react-native-side-menu');
const Menu = require('./menu');

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} = require('react-native');
const { Component } = React;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Settings
      </Text>
    </View>
  );
}


export default settings;
