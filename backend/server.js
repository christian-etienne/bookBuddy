// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', require('./routes/books'));
// Ajouter d'autres routes (utilisateurs, récompenses, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
