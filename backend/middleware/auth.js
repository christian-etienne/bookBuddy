// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Auth Error' });

  try {
    const decoded = jwt.verify(token, 'yourSecretKey');
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(500).send({ message: 'Invalid Token' });
  }
};

module.exports = auth;
