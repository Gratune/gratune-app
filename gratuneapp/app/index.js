import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';


import login from './login';

import signup from './signup';
import venueSetup from './venueSetup';

const TabIcon = ({selected, title}) => {
  return (
    <Text style = {{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};


const App = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene
          key="login"
          component={login}
          title="Gratune"
          initial ={true}
        />
           <Scene
             key="signup"
             component={signup}
             title="Sign Up"
             direction = "vertical"
           />
           <Scene
             key="venueSetup"
             component={venueSetup}
             title="Venue"
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
    backgroundColor: '#30323D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
