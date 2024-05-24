const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  category: { type: String },
  statut: { type: String },
  image_url: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { versionKey: false });

module.exports = mongoose.model('Book', BookSchema,'Books');
