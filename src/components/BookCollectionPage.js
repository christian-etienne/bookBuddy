// src/components/BookCollectionPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookComponent from './BookComponent';

const BookCollectionPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get('/api/books', {
        headers: { Authorization: localStorage.getItem('token') },
      });
      setBooks(result.data);
    };
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un livre"
        value={search}
        onChange={handleSearch}
      />
      <div>
        {filteredBooks.map(book => (
          <BookComponent key={book._id} book={book} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default BookCollectionPage;
