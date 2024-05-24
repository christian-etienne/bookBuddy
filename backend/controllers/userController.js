const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Ajouter un utilisateur
exports.addUser = async (req, res) => {
    const { username, password, books_read, favorites } = req.body;
    try {
        const newUser = new User({ username, password, books_read, favorites });
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Récupérer un utilisateur
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Mettre à jour le mot de passe de l'utilisateur
exports.updatePassword = async (req, res) => {
    const { password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.findByIdAndUpdate(req.params.id, { password: hashedPassword });

        res.json({ msg: 'Password updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Ajouter un livre aux favoris
exports.addFavorite = async (req, res) => {
    const { _id, favorites } = req.body;
    console.log('Request Body:', req.body);  // Log request body
    try {
        const user = await User.findById(_id);
        console.log('Found User:', user);  // Log found user
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        if (!user.favorites.includes(favorites)) {
            user.favorites.push(favorites);
            await user.save();
            console.log('Updated User:', user);  // Log updated user
        }
        res.json(user);
    } catch (err) {
        console.error('Error:', err.message);  // Log error message
        res.status(500).send('Server error');
    }
};
