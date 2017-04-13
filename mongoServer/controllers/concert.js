const User = require('../models/user')
const mongoose = require('mongoose')

exports.add = function (req, res, next) {

  const showing = req.body
  var user_id = req.params.user_id
  // var text = req.body.text
  console.log("this user",showing)
  console.log("user ID", user_id)

    User.find({_id:user_id}).populate("concerts").exec(function(err,shows){
    console.log("concerts",shows[0].concerts)
    shows[0].concerts.push({tonight:"tonight"})
    console.log("concerts",shows[0].concerts)

  })



}

exports.index = function (req, res, next) {
  (req.user)
  // res.json({req.user.concerts})

}

// module.exports = mongoose.model('user')
