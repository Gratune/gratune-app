import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import login from './login';
import signup from './signup';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={login}
          title="Gratune"
          initial ={true}
        />
        <Scene key="signup" component={signup} title="Sign Up"/>
        </Scene>

    </Router>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
