import React from 'react';
import {connect} from 'react-redux';
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';



var UserPage = React.createClass({
  onLogout: function(){
    this.props.dispatch(unauthUser)
  },
  render(){
    return(
      <View>
        <Text>
          USER USER USER USER USER USER USER
        </Text>

        </View>

    )

  }
});





module.exports = UserPage
