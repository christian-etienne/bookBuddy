// backend/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const protect = require('../middleware/auth'); // Assurez-vous que le chemin est correct

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', getBooks);

// @route   GET api/books/:id
// @desc    Get book by ID
// @access  Public
router.get('/:id', getBookById);

// @route   POST api/books
// @desc    Create a new book
// @access  Private
router.post('/', protect, createBook);

// @route   PUT api/books/:id
// @desc    Update a book
// @access  Private
router.put('/:id', protect, updateBook);

// @route   DELETE api/books/:id
// @desc    Delete a book
// @access  Private
router.delete('/:id', protect, deleteBook);

module.exports = router;
