import React from 'react';
import {connect} from 'react-redux';
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';



var VenuePage = React.createClass({
  onLogout: function(){
    this.props.dispatch(unauthUser)
  },
  render(){
    return(
      <View>
        <Text>
          VENUE VENUE VENUE VENUE
        </Text>

        </View>

    )

  }
});





module.exports = VenuePage
