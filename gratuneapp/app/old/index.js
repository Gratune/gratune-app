import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import login from './login';
import userDash from './user-dash';
import allVenues from './all-venues';

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
        <Scene key="User Dashboard"
          component={userDash}
          title="Welcome"
          initial
          />
        </Scene>
        <Scene key="root">
          <Scene key="Music List"
            component={allVenues}
            title="See All Venues"
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
