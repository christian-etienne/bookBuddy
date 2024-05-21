// backend/routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');

// Route pour ajouter un livre
router.post('/addBook', auth, async (req, res) => {
  try {
    const { title, author, image, status, pages, category } = req.body;
    const newBook = new Book({
      title,
      author,
      image,
      status,
      pages,
      category,
      userId: req.user.id
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour récupérer tous les livres
router.get('/books', auth, async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user.id });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour récupérer un livre spécifique
router.get('/book/:id', auth, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour récupérer des livres filtrés
router.get('/book/filter/:filter', auth, async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user.id, ...req.query });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour modifier l'état d'un livre
router.put('/book/:id', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour modifier la page en cours de lecture
router.put('/book/status/:id', auth, async (req, res) => {
  try {
    const { currentPage } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { currentPage }, { new: true });
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour ajouter un livre en favori
router.post('/book/favorite/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    user.favorites.push(req.params.id);
    await user.save();
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour supprimer un livre des favoris
router.delete('/book/favorite/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    user.favorites = user.favorites.filter(fav => fav.toString() !== req.params.id);
    await user.save();
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
