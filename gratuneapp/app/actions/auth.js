import axios from 'axios';

import {SIGNIN_URL, SIGNUP_URL, VENUE_URL, ADDVENUE_URL} from '../api'

exports.loginUser = (email,password) => {
  return function(dispatch) {
    console.log(SIGNIN_URL)
    return axios.post(SIGNIN_URL, {email,password})
    .then((res)=>{
      var {user_id, token, type}= res.data;
      dispatch(authUser(user_id, type));
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
      dispatch(authUser(user_id,type));
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
      dispatch(authUser(user_id));
      console.log(token)
    })
    .catch((error)=>{
      console.log(error)
    });
  }
}

exports.addEvent = (venue, eventName, eventTime) => {
  return function(dispatch) {
    return axios.post(ADDVENUE_URL, {venue, eventName, eventTime})
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
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
