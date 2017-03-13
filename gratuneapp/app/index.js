import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import login from './login';
import musicList from './music-list';


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={login}
          title="login"
          initial
        />
      </Scene>
      <Scene key="root">
        <Scene key="Music List"
          component={musicList}
          title="All Events"
          initial
          />
        </Scene>
    </Router>
  );
}


const styles = StyleSheet.create({
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
});

export default App;
