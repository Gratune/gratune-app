import React from 'react';
import {connect} from 'react-redux';
import{
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Login from './login'
import Main from './main'


var App = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
      return(
        <Main/>
      )


  }
});

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    paddingTop: 20,
    backgroundColor: "#ccc"
  }

});

var mapStateToProps = (state) =>{
  return {
  user_id: state.auth.user_id}
}

module.exports = connect(mapStateToProps)(App);
