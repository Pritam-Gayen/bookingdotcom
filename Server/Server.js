const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Configure your transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD // Your App Password or Gmail password
  }
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"Booking.Com App" <${process.env.EMAIL}>`, // Sender address
      to: to, // List of recipients
      subject: subject, // Subject line
      text: text // Plain text body
    });

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const app = express();

app.use(express.json()); // Middleware for parsing JSON

// MongoDB connection
const mongoURI = process.env.MONGO_URI; // Connection string from MongoDB Atlas

// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    fetchUsers();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Define a schema (optional if not modifying the structure)
const userSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema for dynamic structure
const User = mongoose.model('User', userSchema, 'users'); // Use 'users' as the collection name

// Fetch and display users
function fetchUsers() {
  User.find({})
    .then(users => {
      console.log('Users:', users);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});





// Route to fetch users
app.get('/get-user', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users); // Send users as JSON response
  } catch (error) {
    console.error('Error fetching users:', error); // Log detailed error
    res.status(500).json({ error: 'Error fetching users', details: error.message });
  }
});





// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Example mail usage
sendEmail('pritsaccount@gmail.com', 'Test Email', 'Hello! This is a test email from Booking.com App.');
