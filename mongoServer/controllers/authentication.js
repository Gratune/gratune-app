const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user){
  var timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat:timestamp
  }, config.secret)
}

exports.signin = function(req,res,next){
  var user = req.user;
  var type = user.type;
  res.send({token: tokenForUser(user), user_id: user._id, type:type})
}

exports.signup = function (req,res,next){
  var name = req.body.name
  var email = req.body.email;
  var password = req.body.password;
  var type = "user"
  if (!email || !password){
    return res.status(422).send({error: "Provide email and password"})
  }

  User.findOne({email:email}, function(err,existingUser){
    if(err){return next(err)}
    if (existingUser){
      return res.status(422).send({error:"Email taken"})
    }
  var user = new User({
    name:name,
    email:email,
    password: password,
    type:type
  })
    user.save(function(err){
      if(err){return next(err)}
      res.json({user_id:user._id, token: tokenForUser(user)})
    })
  })
}

exports.venue = function (req,res,next){
  var name = req.body.name
  var email = req.body.email;
  var password = req.body.password;
  var type = "venue"
  if (!email || !password){
    return res.status(422).send({error: "Provide email and password"})
  }

  User.findOne({email:email}, function(err,existingUser){
    if(err){return next(err)}
    if (existingUser){
      return res.status(422).send({error:"Email taken"})
    }
    var user = new User({
      name:name,
      email:email,
      password: password,
      type:type
    })
    user.save(function(err){
      if(err){return next(err)}
      res.json({user_id:user._id, token: tokenForUser(user)})
    })
  })
}
