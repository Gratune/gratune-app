const passport = require('passport');

const AuthenticationController = require('../controllers/authentication')
const passportServuce = require('./passport');


var requireAuth = passport.authenticate('jwt', {session:false});
var requireLogin = passport.authenticate('local', {session:false});

var router = require('express').Router();


router.route("/signup")
.post(AuthenticationController.signup)

router.route("/signin")
.post([requireLogin,AuthenticationController.signin])

// function protected(req,res,next){
//   res.send("here it is")
// }
//
// router.route('/protected')
// .get(requireAuth, protected)

module.exports = router
