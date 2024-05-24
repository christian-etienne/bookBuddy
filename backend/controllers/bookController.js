// backend/controllers/bookController.js
const asyncHandler = require('express-async-handler');
const Book = require('../models/book');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

// @desc    Get book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Create a new book
// @route   POST /api/books
// @access  Private
const createBook = asyncHandler(async (req, res) => {
  const { title, author, description } = req.body;
  const book = new Book({
    title,
    author,
    description,
  });
  const createdBook = await book.save();
  res.status(201).json(createdBook);
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const { title, author, description } = req.body;
  const book = await Book.findById(req.params.id);
  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    await book.remove();
    res.json({ message: 'Book removed' });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
