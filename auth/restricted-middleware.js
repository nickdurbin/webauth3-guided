const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    // check token, if good, just next()
    jwt.verify(
      token,
      'THIS IS THE SECRET',
      (err, decodedToken) => {
        if (err) {
          // this would mean the token is bad
        } else {
          // happy path
        }
      }
    )
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
