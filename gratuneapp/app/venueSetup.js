import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TabBarIOS,
    Alert,
} from 'react-native';

const baricon = "https://cdn3.iconfinder.com/data/icons/buildings-places/512/Concert-256.png"
const usericon = "http://icons.iconarchive.com/icons/icons8/android/512/Users-User-icon.png"

import { Actions } from 'react-native-router-flux';
import signup from './signup';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

// const venueContent = placeholder="Password"

class venueSetup extends Component{
  static title = '<TabBarIOS>';

  state = {
  selectedTab: 'venueTab',
};

  _renderContent = () => {
  return (

    <View style={[styles.tabContent]}>
    <TextInput
    style={styles.login_input}
    placeholder="Venue Name"
    />
    <TextInput
    style={styles.login_input}
    placeholder="Address"
    />
    <TextInput
    style={styles.login_input}
    placeholder="Venue Icon URL"
    />
    <TextInput
    style={styles.login_input}
    placeholder="E-mail"
    />
    <TextInput
    style={styles.login_input}
    placeholder="Password"
    secureTextEntry
    />
    <TextInput
    style={styles.login_input}
    placeholder="Confirm Password"
    secureTextEntry
    />
    <TextInput
    style={styles.login_input}
    placeholder="Liquor License #"
    />
    <Button
        onPress={onButtonPress}
        title="Sign-Up"
        color='#Cdd1c4'
      />
      <Button
          onPress={Actions.login}
          title="Sign-In Page"
          color='#Cdd1c4'
        />
    </View>
  );
};

render() {
  return (
    <TabBarIOS
      unselectedTintColor="#Cdd1c4"
      tintColor="#5c80bc"
      barTintColor="#30323D">
      <TabBarIOS.Item
        title="User Sign-Up"
        selected={this.state.selectedTab === 'userTab'}
        onPress={Actions.signup}
        >
        {this._renderContent()}
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Venue Sign-Up"
        selected={this.state.selectedTab === 'venueTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'userTab',
          });
        }}
        >
        {this._renderContent()}
      </TabBarIOS.Item>
    </TabBarIOS>
  );
}
}

var styles = StyleSheet.create({
tabContent: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#4d5061',

},
tabText: {
  fontSize: 40,
  height: 40,
  margin:40,
  // textAlign: 'center',
  color: '#Cdd1c4',
},
login_input:{
  fontSize: 20,
  // color: '#Cdd1c4',
  height: 40,
  // padding: 20,
  justifyContent: 'center',
  backgroundColor: '#Cdd1c4',
},
});

module.exports = venueSetup;
