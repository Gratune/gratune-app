import React from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  NavigatorIOS
} from 'react-native';

import {loginUser, signupVenue} from '../../actions/auth'
import Login from './login'



var VenueSetup = React.createClass({
  UserSignup: function(){

    this.props.navigator.pop()
  },
  onSignin: function(){
    this.props.navigator.popToTop()

  },
  onSignUp: function(){
    var {dispatch, fields: {name,email, password,confirmpassword,liquor}} = this.props;
    console.log("know it",this.props.fields)
    dispatch(signupVenue(name.value, email.value, password.value, confirmpassword.value, liquor.value))
    if (name.value&& email.value&& password.value&& confirmpassword.value&& liquor.value){
      this.props.navigator.popToTop()
    }

  },
  render(){
    var {fields: {name,email, password, confirmpassword, liquor}} = this.props;

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
              require('../../image/gnote.png')
          }/>
      </View>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Venue Sign Up
      </Text>
      </View>
      <View style={styles.fieldContainer}>

      <View style = {styles.field}>
        <TextInput
        {...name}
        placeholder = "Venue Name"
        style={styles.input}/>

        <View>
        {renderError(email)}
        </View>

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
        style={styles.input}
        secureTextEntry/>
        <View>
        {renderError(password)}
        </View>
      </View>
      <View style = {styles.field}>
        <TextInput
        {...confirmpassword}
        placeholder = "Confirm Password"
        style={styles.input}
        secureTextEntry/>
        <View>
        {renderError(password)}
        </View>
      </View>
      <View style = {styles.field}>
        <TextInput
        {...liquor}
        placeholder = "Liquor Licence #"
        style={styles.input}/>
        <View>
        {renderError(password)}
        </View>
      </View>
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.onSignUp}>
      <Text style = {styles.buttonS} >Sign Up</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.UserSignup}>
      <Text style = {styles.buttonS} >User Sign Up Page</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.onSignin} >
      <Text style = {styles.buttonS} >Sign In Page</Text>
      </TouchableOpacity>
    </View>

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
    width: 100,
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
    backgroundColor: "#cdd1c4"
  },
  input:{
    height: 26
  },
  fieldContainer:{
    flex:2
  },
  button:{
    padding:10,
    borderRadius:20,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: "#30323d"
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
  fields: ['name','email', 'password','confirmpassword','liquor'],
  validate: validate
}, null, null)(VenueSetup)
