import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import {configureStore} from './app/store';

import App from './app/components/sign-in/app';

export default class gratuneapp extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gratuneapp', () => gratuneapp);
