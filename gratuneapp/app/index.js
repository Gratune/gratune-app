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

import { Router, Scene } from 'react-native-router-flux';

const Basic = require('./basic');

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="basic"
          component={Basic}
          initial
          hideNavBar>
        </Scene>
      </Scene>
    </Router>
  );
}


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

export default App;
