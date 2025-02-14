// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // To allow cross-origin requests from your frontend

let bookings = []; // Temporary in-memory storage for booking submissions

// POST route to submit booking data
app.post('/api/bookings', (req, res) => {
  const booking = req.body;

  if (!booking.name || !booking.contact || !booking.eventType || !booking.address || !booking.eventDate) {
    return res.status(400).json({ message: 'Please fill all required fields.' });
  }

  bookings.push(booking); // Store booking in the array
  res.status(201).json({ message: 'Booking submitted successfully. You will receive call for further process' });
});

// GET route to fetch all bookings (for the admin page)
app.get('/api/bookings', (req, res) => {
  res.json(bookings); // Send all bookings as JSON
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
