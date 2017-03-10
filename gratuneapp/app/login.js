import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default login;
