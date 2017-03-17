import axios from 'axios';
import Keychain from 'react-native-keychain';

import {SIGNIN_URL, SIGNUP_URL, VENUE_URL} from '../api'

exports.loginUser = (email,password) => {
  return function(dispatch) {
    console.log(SIGNIN_URL)
    return axios.post(SIGNIN_URL, {email,password})
    .then((res)=>{
      var {user_id, token, type}= res.data;
      console.log("user_id", user_id)
      // Keychain.setGenericPassword(user_id, token)
      // .then(function() {
        dispatch(authUser(user_id, type));
        console.log('Credentials saved successfully!');
      // });
      console.log(type)

    })
    .catch((error)=>{
      console.log(error)
    });
  }
}

exports.signupUser = (name,email,password,confirmpassword) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {name,email,password,confirmpassword})
    .then((res)=>{
      var {user_id, token, type}= res.data;
      Keychain.setGenericPassword(user_id, token)
      .then(function() {
        dispatch(authUser(user_id, type));
        console.log('Credentials saved successfully!');
      });
      console.log(token)
    })
    .catch((error)=>{
      console.log(error)
    });
  }
}

exports.signupVenue = (name,email,password,confirmpassword,liqour) => {
  return function(dispatch) {
    return axios.post(VENUE_URL, {name,email,password,confirmpassword,liqour})
    .then((res)=>{
      var {user_id, token}= res.data;
      console.log(res.data)
      Keychain.setGenericPassword(user_id, token)
      .then(function() {
        dispatch(authUser(user_id, type));
        console.log(user_id)
        console.log('Credentials saved successfully!');
      });
      console.log(token)
    })
    .catch((error)=>{
      console.log(error)
    });
  }
}



authUser =(user_id,usertype)=>{
  return{
    type: 'Auth',
    usertype:usertype,
    user_id,
  }
}

exports.unauthUser ={
    type: 'Unauth'

  }
