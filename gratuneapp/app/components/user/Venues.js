import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Navigator,
  StatusBar,
  Text
} from 'react-native'

import MockVenues from './Mock-Venues'
import Venue from './Venue'

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'venueList') {
    return (
      // TODO: Add venueList component
      <MockVenues navigator={navigationOperations} />
    )
  } else if (route.name === 'venue') {
    return (
      <Venue
        venue={route.venue}
        navigator={navigationOperations}
      />
    )
  }
}

export default class App extends Component {
  componentDidMount() {
    // Hid the status bar
    StatusBar.setHidden(true)
  }

  render() {
    return (
      // Handle navigation between screens
      <Navigator
      // Default to list route
        initialRoute={{name: 'venueList'}}
        // Use FloatFromBottom transition between screens
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper function
        renderScene={RouteMapper}
      />
    )
  }
}
