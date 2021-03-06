import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import MainLogin from '../sign-in/main'
import Main from './Main';
import NavBar from './Nav';
import Schedule from './Schedule';
import Venues from './Venues';
import Account from './Account';
import TabIcon from './TabIcon';
import TabView from './TabView';
import Favorites from './Favorites';

export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene initial={true} hideNavBar={true} key="main" component={Main} title="Main" />
            <Scene hideNavBar={true} key="loginPage" component={MainLogin} title="loginPage" />

            <Scene hideNavBar={true} key="account" component={Account} title="Account" />

            <Scene key="tabbar" component={NavBar}>
              <Scene
                key="main"
                tabs
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >
                <Scene
                  key="Schedule"
                  component={Venues}
                  title="Schedule"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
                <Scene
                  key="Favorites"
                  component={Favorites}
                  title="Favorites"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
                <Scene
                  key="Account"
                  component={Account}
                  title="Account"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#4D5061',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#4D5061',
  },
  navbarstyle: {
    backgroundColor: '#4D5061'
  },
  navbartitle: {
    color: 'white'
  }

});
