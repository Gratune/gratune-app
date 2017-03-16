const mongoose = require('mongoose')
const Schema = mongoose.Schema

var concertSchema = new Schema ({
  venue:{
    type:String
  },
  eventName:{
    type: String,
  },
  eventTime:{
    type:String
  }
})


concertSchema.pre('save', function(next){
  next();

})

module.exports = mongoose.model('concert', concertSchema)
