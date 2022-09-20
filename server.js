// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Init Express App
const app = express();

// Config App Settings
require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;

// Connect to MongoDB
mongoose.connect(DATABASE_URL);
mongoose.connection
  .on('connected', () => console.log('Connected to MongoDB'))
  .on('error', (error) =>
    console.log('Problem with MongoDB: ' + error.message)
  );

// Middleware

// Routes - INDUCES
app.get('/', (req, res) => {
  res.send('Welcome to the People Management App');
});

// Listen
app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});
