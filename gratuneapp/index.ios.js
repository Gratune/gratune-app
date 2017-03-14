import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import {configureStore} from './app/store';
import Main from './app/components/Main';

export default class Gratune extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Gratune', () => Gratune);
