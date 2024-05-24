const express = require('express');
const connectDB = require('./Config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connexion à la base de données
connectDB();


// Middleware
// app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/bookRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
