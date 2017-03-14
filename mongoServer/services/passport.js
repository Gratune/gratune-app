const passport = require('passport');
const Exjwt = require('passport-jwt').ExtractJwt;
const jwtStra = require('passport-jwt').Strategy;
const LocalStrat = require('passport-local')

const User = require ('../models/user')
const config = require ('../config')

var localOptions = {
  usernameField:'email'
}

var localStrategy = new LocalStrat(localOptions, function(email,password,done){
  User.findOne({email:email.toLowerCase()}, function(err,user){
    if(err){return done(err)}
    if(!user){return done(null,false)}
    user.comparedPassword(password, function(err,isMatch){
      if (err){ return done(err)}
      if (!isMatch){return done(null,false)}
      return done(null,user)
    })
  })
})

var jwtOption = {
  secretOrKey: config.secret,
  jwtFromRequest: Exjwt.fromHeader('authorizaiton')
}

var jwtStrat = new jwtStra(jwtOption, function(payload,done){
  User.findById(payload.sub,function(err,user){
    if(err){
      return done(err,false)
    }
    if(user){
      done(null,user)
    }else{
      done(null,false)
    }
  })
})

passport.use(localStrategy)

passport.use(jwtStrat)
