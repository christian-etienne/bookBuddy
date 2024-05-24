const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/books', bookController.getBooks);
router.post('/addBook', bookController.addBook);
router.get('/book/:id', bookController.getBookById);
router.put('/book/:id', bookController.updateBookStatus);
router.put('/book/statut/:id', bookController.updateCurrentPage);

router.delete('/book/:id', bookController.deleteBook);

module.exports = router;