'use strict'

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import Drawer from 'react-native-drawer'

import Home from './home';
import Settings from './settings';
import addBand from './addBand';

import MyDrawer from './MyDrawer'

export default class App extends Component {

render() {
  return (
    <Router>
      <Scene key="drawer" component={MyDrawer} open={false}>
        <Scene key="main" tabs={false} >
          <Scene key="Home" component={Home}  />
          <Scene key = "Settings" component={Settings} />
          <Scene key = "addBand" component={addBand} />
        </Scene>
      </Scene>
    </Router>);
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
})
