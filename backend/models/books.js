// backend/models/Book.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, enum: ['to read', 'reading', 'finished'], default: 'to read' },
  pages: { type: Number, required: true },
  category: { type: String, required: true },
  currentPage: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
});

module.exports = mongoose.model('Book', BookSchema);
