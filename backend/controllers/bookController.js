// backend/controllers/bookController.js
const asyncHandler = require('express-async-handler');
const Book = require('../models/book');

// @desc    Add a new book
// @route   POST /api/books/addBook
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  const { title, author, image, status, pages, category } = req.body;

  const book = new Book({
    user: req.user._id,
    title,
    author,
    image,
    status,
    pages,
    category,
  });

  const createdBook = await book.save();
  res.status(201).json(createdBook);
});

// @desc    Get all books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user._id });
  res.json(books);
});

// @desc    Get book by ID
// @route   GET /api/books/book/:id
// @access  Private
const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Update book status
// @route   PUT /api/books/book/:id
// @access  Private
const updateBookStatus = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.status = req.body.status || book.status;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Update current page
// @route   PUT /api/books/status/:id
// @access  Private
const updateCurrentPage = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.currentPage = req.body.currentPage || book.currentPage;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Add book to favorites
// @route   POST /api/books/favorite/:id
// @access  Private
const addBookToFavorites = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.isFavorite = true;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Remove book from favorites
// @route   DELETE /api/books/favorite/:id
// @access  Private
const removeBookFromFavorites = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.isFavorite = false;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

module.exports = {
  addBook,
  getBooks,
  getBookById,
  updateBookStatus,
  updateCurrentPage,
  addBookToFavorites,
  removeBookFromFavorites,
};
