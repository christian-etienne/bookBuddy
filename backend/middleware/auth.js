// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // Get token from header
  let token = req.header('Authorization');
  if (token && token.startsWith('Bearer ')) {
    token = token.replace('Bearer ', '');
  }

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, 'yourSecretToken');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = protect;
