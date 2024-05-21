// backend/scripts/seedBooks.js
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Book = require('../models/Book');

const seedBooks = async () => {
  await connectDB();

  const books = [
    {
      title: '1984',
      author: 'George Orwell',
      image: 'https://example.com/1984.jpg',
      status: 'to read',
      pages: 328,
      category: 'Dystopian'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image: 'https://example.com/mockingbird.jpg',
      status: 'to read',
      pages: 281,
      category: 'Classic'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: 'https://example.com/gatsby.jpg',
      status: 'to read',
      pages: 180,
      category: 'Classic'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      image: 'https://example.com/pride.jpg',
      status: 'to read',
      pages: 279,
      category: 'Romance'
    },
    {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      image: 'https://example.com/mobydick.jpg',
      status: 'to read',
      pages: 635,
      category: 'Adventure'
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      image: 'https://example.com/warandpeace.jpg',
      status: 'to read',
      pages: 1225,
      category: 'Historical'
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      image: 'https://example.com/catcher.jpg',
      status: 'to read',
      pages: 214,
      category: 'Classic'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image: 'https://example.com/hobbit.jpg',
      status: 'to read',
      pages: 310,
      category: 'Fantasy'
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      image: 'https://example.com/brave.jpg',
      status: 'to read',
      pages: 268,
      category: 'Dystopian'
    }
  ];

  try {
    await Book.insertMany(books);
    console.log('Books inserted successfully');
  } catch (error) {
    console.error(error.message);
  } finally {
    mongoose.connection.close();
  }
};

seedBooks();
