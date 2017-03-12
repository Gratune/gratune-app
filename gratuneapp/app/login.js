import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
const login = () => {
  return (

    <View style={styles.container}>
    <Image
  style={styles.image}
  source={require('./gnote.png')}
    />
      <Text style={styles.welcome}>
        Gratune
      </Text>
      <Button
  onPress={onButtonPress}
  title="Sign-In"
  accessibilityLabel="See an informative alert"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d5061',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width:200,
    height:200
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    paddingTop:-50,
    color: '#Cdd1c4',
  },
});

export default login;
