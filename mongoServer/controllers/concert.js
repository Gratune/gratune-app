const Concert = require('../models/concert')


exports.add = function (req, res, next) {
  var eventName = req.body.eventName;
  var eventTime = req.body.eventTime;

  var bar = "bar"

  var concert = new Concert({
    venue: bar,
    eventName: eventName,
    eventTime: eventTime
  })

}
