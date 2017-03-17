const API_URL = `https://gratune.herokuapp.com/v1`;
// exports.SIGNIN_URL = `https://gratune.herokuapp.com/v1/signin`
// exports.SIGNUP_URL = `https://gratune.herokuapp.com/v1/signup`
// exports.VENUE_URL = `https://gratune.herokuapp.com/v1/venue`
exports.VENUE_URL = `http://localhost:3000/v1/venue`
exports.SIGNIN_URL = `http://localhost:3000/v1/signin`
exports.SIGNUP_URL = `http://localhost:3000/v1/signup`

// exports.ADDVENUE_URL=(user_id) => `https://gratune.herokuapp.com/v1/user/${user_id}/concerts`
exports.ADDVENUE_URL=(user_id) => `http://localhost:3000/v1/user/${user_id}/concerts`
