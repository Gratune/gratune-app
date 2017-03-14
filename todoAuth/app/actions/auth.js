import axios from 'axios';

import {SIGNIN_URL, SIGNUP_URL} from '../api'

exports.loginUser = (email,password) => {
  return function(dispatch) {
    console.log(SIGNIN_URL)
    return axios.post(SIGNIN_URL, {email,password})
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

exports.signupUser = (email,password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email,password})
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

authUser =(user_id)=>{
  return{
    type: 'Auth',
    user_id
  }
}

exports.unauthUser ={
    type: 'Unauth'

  }
