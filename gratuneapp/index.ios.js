import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import {configureStore} from './app/store';

import Main from './app/components/venue/Main';
import Settings from './app/components/venue/Settings';
import NavigationDrawer from './app/components/venue/Nav';
import TabIcon from './app/components/venue/TabIcon';
import TabView from './app/components/venue/TabView';
import Home from './app/components/venue/Home';
import Schedule from './app/components/venue/Schedule';
import UserMain from './app/components/user/Main';
import UserVenues from './app/components/user/Venues';

export default class gratuneapp extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Scene key="root">
            <Scene initial={true} hideNavBar={true} key="main" component={Main} title="Main" />

            <Scene hideNavBar={true} key="settings" component={Settings} title="Settings" />

            <Scene key="tabbar" component={NavigationDrawer}>
              <Scene
                key="main"
                tabs
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >
                <Scene
                  key="home"
                  component={Home}
                  title="Home"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
                <Scene
                  key="schedule"
                  component={Schedule}
                  title="Schedule"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
                <Scene
                  key="profile"
                  component={TabView}
                  title="Profile"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
                <Scene
                  key="stats"
                  component={TabView}
                  title="Stats"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
                <Scene
                  key="settings"
                  component={TabView}
                  title="Setttings"
                  icon={TabIcon}
                  navigationBarStyle={styles.navbarstyle}
                  titleStyle={styles.navbartitle}
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
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

AppRegistry.registerComponent('gratuneapp', () => gratuneapp);
