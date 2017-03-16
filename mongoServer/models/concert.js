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

module.exports = mongoose.model('concert', concertSchema)
