import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import {configureStore} from './app/store';
import Main from './app/components/venue/Main';

export default class gratuneapp extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gratuneapp', () => gratuneapp);
