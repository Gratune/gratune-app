const Concert = require('../models/concerts')

exports.newShow = function(req,res,next){
  var type = "THIS IS WORKING";
  var message = "HEY MERRIL"
  res.send({type: type, message:message})
}
