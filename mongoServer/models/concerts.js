const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema ({
  show:{
    type:String,
    message: String
  }
})

userSchema.pre('save', function(next){
  var show = this;
  next();
})



module.exports = mongoose.model('concerts', userSchema)
