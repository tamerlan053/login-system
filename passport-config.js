const LocalStrategy = require('passport-local').Strategy

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    const user = getUserByEmail(email)
  }
}
