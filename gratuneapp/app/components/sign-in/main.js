import React from 'react';
import {connect} from 'react-redux';
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import Login from './login'


var Main = React.createClass({
  onLogout: function(){
    this.props.dispatch(unauthUser)
  },
  render(){
    return(
      <NavigatorIOS
        initialRoute ={{
          component:Login,
          title: 'Login',
          navigationBarHidden:true
        }}
        style={{flex:1}}/>
    )

  }
});





module.exports = Main
