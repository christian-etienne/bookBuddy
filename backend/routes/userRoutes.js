const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/addUser', userController.addUser);
router.put('/addFavorite', userController.addFavorite);  // PUT route for adding favorite
router.get('/:id', userController.getUser);
router.put('/:id/password', userController.updatePassword);

module.exports = router;
