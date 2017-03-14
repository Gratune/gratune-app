import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import {configureStore} from './app/store';
import Main from './app/components/user/Main';
import Venues from './app/components/user/Venues';

export default class gratuneapp extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Venues />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gratuneapp', () => gratuneapp);
