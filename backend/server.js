require('dotenv').config();  // Add this line to load the environment variables

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 5000;

// Use the MONGO_URI from the environment variables
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('MongoDB connection error: ', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
