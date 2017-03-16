const passport = require('passport');

const AuthenticationController = require('../controllers/authentication')
const ConcertController = require('../controllers/concert')
const passportServuce = require('./passport');


var requireAuth = passport.authenticate('jwt', {session:false});
var requireLogin = passport.authenticate('local', {session:false});

var router = require('express').Router();


router.route("/signup")
.post(AuthenticationController.signup)


router.route("/venue")
.post(AuthenticationController.venue)


router.route("/signin")
.post([requireLogin,AuthenticationController.signin])

router.route("/addEvent")
.post(ConcertController.add)

// function protected(req,res,next){
//   res.send("here it is")
// }
//
// router.route('/protected')
// .get(requireAuth, protected)

module.exports = router
