import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import {connect} from 'react-redux';

import Main from './Main';
import Settings from './Settings';
import NavigationDrawer from './Nav';
import TabIcon from './TabIcon';
import TabView from './TabView';
import Home from './Home';
import Schedule from './Schedule';
import Update from './Update';

export default class App extends Component {
  render() {
    return (
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
                  component={Update}
                  title="Profile"
                  icon={TabIcon}
                  user_id= {this.props.user_id}
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


var mapStateToProps = (state) =>{
  return {
  user_id: state.auth.user_id,
  usertype: state.auth.usertype
  }
}

module.exports = connect(mapStateToProps)(App);
