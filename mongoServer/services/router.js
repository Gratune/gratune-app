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

// router.route("/users/:user_id/concerts")
// .post(ConcertController.add)

router.route("/concerts")
.get(requireAuth, ConcertController.index)

router.route("/user/:user_id/concerts")
.put(ConcertController.add)

module.exports = router
