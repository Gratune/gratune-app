import React from 'react';
import {connect} from 'react-redux';
import{
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Login from './login'
import Main from './main'
import UserPage from './userpage'
import VenuePage from './venuepage'



var App = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    console.log("usertype",this.props.usertype)
    if(this.props.user_id&&this.props.usertype ==="user"){
      return(
        <UserPage/>
      )
    }else if(this.props.user_id&&this.props.usertype ==="venue"){
      return(
      <VenuePage/>
      )
    }else{

      return(
        <Main/>
      )
    }




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
  user_id: state.auth.user_id,
  usertype: state.auth.usertype
  }
}

module.exports = connect(mapStateToProps)(App);
