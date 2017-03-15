import React from 'react';
import {connect} from 'react-redux';
import{
  Text,
  View,
} from 'react-native';

import Login from './login'
import Main from './main'
import UserPage from '../user/App'
import VenuePage from '../venue/App'



var App = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    console.log("usertype",this.props.usertype)
    if (this.props.user_id&&this.props.usertype ==="user") {
      return (
        <UserPage/>
      )
    } else if (this.props.user_id&&this.props.usertype ==="venue") {
      return(
        <VenuePage/>
      )
    } else {

      return(
        <UserPage/>
      )
    }
  }
});

var mapStateToProps = (state) =>{
  return {
  user_id: state.auth.user_id,
  usertype: state.auth.usertype
  }
}

module.exports = connect(mapStateToProps)(App);
