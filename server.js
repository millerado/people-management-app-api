// Dependencies
const express = require('express');

// Init Express App
const app = express();

// Config App Settings
const { PORT = 4000, DATABASE_URL } = process.env;

// Connect to MongoDB

// Middleware

// Routes - INDUCES
app.get('/', (req, res) => {
  res.send('Welcome to the People Management App');
});

// Listen
app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});
