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

import {loginUser, signupUser} from '../../actions/auth'
import VenueSetup from './VenueSetup'



var SignupPage = React.createClass({
  onSignin: function(){
    this.props.navigator.pop()
  },
  VenueSignup: function(){
    this.props.navigator.push({
      component: VenueSetup,
      title: "Venue sign up",
      navigationBarHidden:true
    })
  },
  onSignUp: function(){
    var {dispatch, fields: {name, email, password, confirmpassword}} = this.props;
    dispatch(signupUser(name.value, email.value, password.value, confirmpassword.value))
    console.log("working",email.value)
  },
  render(){
    var {fields: {name,email, password, confirmpassword}} = this.props;

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
        User Sign Up
      </Text>
      </View>
      <View style={styles.fieldContainer}>
      <View style = {styles.field}>
        <TextInput
        {...name}
        placeholder = "Name"
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
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.onSignUp}>
      <Text style = {styles.buttonS} >Sign Up</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.button}>
      <TouchableOpacity onPress = {this.VenueSignup}>
      <Text style = {styles.buttonS} >Venue Sign Up Page</Text>
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
    backgroundColor: "#30323d"
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
  fieldContainer:{
    flex:2
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
  fields: ['name','email', 'password','confirmpassword'],
  validate: validate
}, null, null)(SignupPage)
