// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

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

// Set Up Model
const peopleSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    title: String,
  },
  { timestamps: true }
);

const People = mongoose.model('People', peopleSchema);

// Middleware
app.use(express.json()); // Creates req.body from json data
// the other method we used (urlencoded({ extended: false })) turned
// FORM data into req.body
app.use(logger('dev'));

// Routes - INDUCES
app.get('/', (req, res) => {
  res.send('Welcome to the People Management App');
});

// Listen
app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});
