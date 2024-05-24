const Book = require('../Models/book');

// Ajouter un livre
exports.addBook = async (req, res) => {
  const { title, author, category, status, image_url, pages, user_id } = req.body;
  try {
    const newBook = new Book({ title, author, category, status, image_url, pages, user_id });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Récupérer tous les livres
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
  }
};

// Récupérer un livre spécifique
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Modifier l'état du livre
exports.updateBookStatus = async (req, res) => {
  const { statut } = req.body;
  console.log('Request Params:', req.params);
  console.log('Request Body:', req.body);
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { statut }, { new: true });
    console.log('Updated Book:', book);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};



// Mettre à jour la page en cours de lecture
exports.updateCurrentPage = async (req, res) => {
  const { pages } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { pages }, { new: true });
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Ajouter un livre aux favoris
exports.addFavorite = async (req, res) => {
  const { user_id, book_id } = req.body;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    if (!user.favorites.includes(book_id)) {
      user.favorites.push(book_id);
      await user.save();
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Supprimer un livre des favoris
exports.removeFavorite = async (req, res) => {
  const { user_id, book_id } = req.body;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    user.favorites = user.favorites.filter(id => id.toString() !== book_id);
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// supprimer un livre 
exports.deleteBook = async (req, res) => {
  console.log('Delete request received for ID:', req.params.id); // Ajoutez cette ligne pour vérifier l'ID reçu
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json({ msg: 'Book deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
