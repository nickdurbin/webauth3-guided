const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

// MAKE NAIVE makeToken AND verifyToken functions!!
// do this on a front - end script so you can use btoa and atob functions
// you can load a hashing function like md5 using a script tag

router.get('/', restricted, (req, res) => {
  // do it in here
  // supposedly we have access to the decoded token right inside the req
  // when we made the token, a roles array was part of the payload
  // make sure there's a role of "student" (which we hardcoded when we made the token)
  // do the right thing! ONLY STUDENTS SHOULD BE ABLE TO GET THE LIST OF USERS
  if (req.decodedToken.roles.includes("student")) {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.send(err)
      });
  } else {
    res.json({
      message: "You don't have the right role to access this information"
    });
  }
});

module.exports = router;
