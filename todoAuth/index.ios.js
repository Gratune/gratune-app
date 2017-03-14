/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app/components/app'
import {configureStore} from './app/store'

export default class todoAuth extends Component {
  render() {
    return (
      <Provider store = {configureStore()}>
        <App/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('todoAuth', () => todoAuth);
