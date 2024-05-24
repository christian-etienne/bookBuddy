const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/bookbuddy'); // Exemple pour un serveur local
        // ou
        // await mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/bookbuddy?retryWrites=true&w=majority'); // Exemple pour MongoDB Atlas
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
