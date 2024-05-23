// backend/utils/generateToken.js
const jwt = require('jsonwebtoken');

// Définir votre clé secrète ici
const JWT_SECRET = 'votre_clé_secrète_ici';

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: '30d', // La durée de validité du token, vous pouvez la modifier selon vos besoins
  });
};

module.exports = generateToken;
