import React, {
  Component,
  PropTypes,
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class ControlPanel extends Component {

  render() {
    var closeDrawer = () => {
      Actions.refresh({key: 'drawer', open: value => !value });
    };

    var goToSettings = () => {
      Actions.refresh({key: 'drawer', open: value => !value })
      setTimeout(() => Actions.Settings(), 100);
    }

    var goToAddBand = () => {
      Actions.refresh({key: 'drawer', open: value => !value })
      setTimeout(() => Actions.addBand(), 100);
    }

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.controlText}>Control Panel</Text>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToSettings}>
          <Text>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToAddBand}>
          <Text>Add Bands</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})
