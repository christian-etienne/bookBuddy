const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Assurez-vous que le fichier bookRoutes existe

const app = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes); // Utilisation des routes des livres

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
