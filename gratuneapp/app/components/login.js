import React from 'react';
import {connect} from 'react-redux';
import { reduxForm} from 'redux-form';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  RefreshControl,
  NavigatorIOS
} from 'react-native';

import {loginUser, signupUser} from '../actions/auth'
import SignupPage from './SignupPage'


var Login = React.createClass({
  onSignin: function(){
    var {dispatch, fields: {email, password}} = this.props;
    dispatch(loginUser(email.value, password.value))
  },
  onSignUp: function(){
    this.props.navigator.push({
      component: SignupPage,
      title: "sign up",
      navigationBarHidden:true
    })
    // var {dispatch, fields: {email, password}} = this.props;
    // dispatch(signupUser(email.value, password.value))
    // console.log("working",email.value)
  },
  render(){
    var {fields: {email, password}} = this.props;

    var renderError = (field) => {
      if (field.touched && field.error){
        return (
          <Text style = {styles.formError}>{field.error}</Text>
        )
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image style = {styles.image}
          source = {
              require('../image/gnote.png')
          }/>
      </View>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Gratune
      </Text>
      </View>
      <View style = {styles.field}>
        <TextInput
        {...email}
        placeholder = "Email"
        style={styles.input}/>
        <View>
        {renderError(email)}
        </View>

      </View>
      <View style = {styles.field}>
        <TextInput
        {...password}
        placeholder = "Password"
        style={styles.input}/>
        <View>
        {renderError(password)}
        </View>
      </View>
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.onSignin} >
      <Text style = {styles.buttonS} >Sign In</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.onSignUp}>
      <Text style = {styles.buttonS} >Sign Up</Text>
      </TouchableOpacity>
      </View>

      </View>
    )
  }
});

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    paddingTop: 20,
    backgroundColor: "#4d5061"
  },
  imageContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  image:{
    resizeMode: 'contain',
    width: 200,
  },
  titleContainer:{
    padding:10
  },
  title:{
    justifyContent:'center',
    alignSelf:'center',
    color:'#cdd1c4',
    fontSize: 35
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: "#cdd1c4",
  },
  input:{
    height: 26,
    color: "#30323d"

  },
  button:{
    padding:20,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  buttonS:{
    fontSize: 20,
    color: '#cdd1c4'
  },
  formError:{
    color: 'red'
  }

});




var validate = (formProps) => {
  var errors= {};
  if(!formProps.email){
    errors.email = "Please enter email"
  }
  if(!formProps.password){
    errors.password = "Please enter password"

  }
  return errors;
}

module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login)
