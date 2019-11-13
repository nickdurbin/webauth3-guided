const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  // do it in here
  // supposedly we have access to the decoded token right inside the req
  // when we made the token, a roles array was part of the payload
  // make sure there's a role of "student" (which we hardcoded when we made the token)
  // do the right thing! ONLY STUDENTS SHOULD BE ABLE TO GET THE LIST
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
