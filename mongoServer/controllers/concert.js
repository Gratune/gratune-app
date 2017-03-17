const User = require('../models/user')
const mongoose = require('mongoose')

exports.add = function (req, res, next) {

  var events = req.body
  var user_id = req.params.user_id
  // var text = req.body.text
  console.log("this user",events)
  console.log("user ID", user_id)

  User.find({_id:user_id},function(err,existingUser){
    console.log(existingUser);

    existingUser[0].concerts.push(events)
    console.log(existingUser);
    // console.log();
  })



}

exports.index = function (req, res, next) {
  (req.user)
  // res.json({req.user.concerts})

}

// module.exports = mongoose.model('user')
