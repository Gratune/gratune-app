import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TextInput,
  TouchableOpacity
} from "react-native";

import { Actions } from 'react-native-router-flux';
import {addEvent} from '../../actions/addEvents'


var Update = React.createClass ({
  addNewEvent: function(){
    console.log("update props", this.props.user_id)
    var {dispatch, fields: {eventName, eventTime}} = this.props;
    dispatch(addEvent(this.props.user_id, eventName.value, eventTime.value))
    console.log("working", eventName.value)
  },

  render() {
    var {fields: {eventName, eventTime}} = this.props;

    var renderError = (field) => {
      if (field.touched && field.error){
        return (
          <Text style = {styles.formError}>{field.error}</Text>
        )
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Add Event to Schedule</Text>


      <View style={styles.fieldContainer}>
        <View style = {styles.field}>
          <TextInput
          {...eventName}
          placeholder = "Event Name"
          style={styles.input}/>
          <View>
            {renderError(eventName)}
          </View>
        </View>

        <View style = {styles.field}>
          <TextInput
          {...eventTime}
          placeholder = "Time"
          style={styles.input}/>
          <View>
          {renderError(eventTime)}
          </View>
        </View>

        <View style = {styles.button}>
          <TouchableOpacity onPress = {this.addNewEvent}>
            <Text style = {styles.buttonS} >Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>

    );
  }
})

const styles = StyleSheet.create({

container:{
  flex:1,
  justifyContent:'center',
  alignItems:'stretch',
  paddingTop: 20,
  backgroundColor: "#30323d",
  marginTop: 64
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
},
heading1: {
  fontSize: 24,
  paddingTop: 10,
  paddingBottom:10,
  color: '#CDD1C4'
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
  fields: ['eventName','eventTime'],
  validate: validate
}, null, null)(Update)
