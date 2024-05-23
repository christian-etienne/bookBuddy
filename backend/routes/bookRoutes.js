// backend/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const {
  addBook,
  getBooks,
  getBookById,
  updateBookStatus,
  updateCurrentPage,
  addBookToFavorites,
  removeBookFromFavorites,
} = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST api/books/addBook
// @desc    Add a new book
// @access  Private
router.post('/addBook', protect, addBook);

// @route   GET api/books
// @desc    Get all books
// @access  Private
router.get('/', protect, getBooks);

// @route   GET api/books/book/:id
// @desc    Get book by ID
// @access  Private
router.get('/book/:id', protect, getBookById);

// @route   PUT api/books/book/:id
// @desc    Update book status
// @access  Private
router.put('/book/:id', protect, updateBookStatus);

// @route   PUT api/books/status/:id
// @desc    Update current page
// @access  Private
router.put('/status/:id', protect, updateCurrentPage);

// @route   POST api/books/favorite/:id
// @desc    Add book to favorites
// @access  Private
router.post('/favorite/:id', protect, addBookToFavorites);

// @route   DELETE api/books/favorite/:id
// @desc    Remove book from favorites
// @access  Private
router.delete('/favorite/:id', protect, removeBookFromFavorites);

module.exports = router;
