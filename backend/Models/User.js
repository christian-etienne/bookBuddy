const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  books_read: { type: Number, default: 0 },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema,'Users');
