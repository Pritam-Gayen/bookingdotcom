const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const partnerDB = process.env.MONGO_PARTNER_URI;
const clientDB = process.env.MONGO_CLIENT_URI;

// Connect to "client" database
const clientConnection = mongoose.createConnection(clientDB);

// Connect to "business_partner" database
const businessConnection = mongoose.createConnection(partnerDB);

// Define User Schema (should be defined before using it)
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  verificationCode: String,
  isVerified: { type: Boolean, default: false },
});

// Create models for client database
const ClientUser = clientConnection.model("User", UserSchema, "user");
const TempUserClient = clientConnection.model("TempUser", UserSchema, "temp_user");

// Create models for business partner database
const BusinessUser = businessConnection.model("User", UserSchema, "user");
const TempBusiness = businessConnection.model("TempUser", UserSchema, "temp_user");

// Configure Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD // Your App Password
  }
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"Booking.Com App" <${process.env.EMAIL}>`,
      to: to,
      subject: subject,
      text: text
    });

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await ClientUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user data (but not verified yet)
    await TempUserClient.findOneAndUpdate(
      { email },
      {
        $set: {
          name,
          password: hashedPassword,
          verificationCode
        }
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );


    // Send verification email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify Your Email",
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "We have sent a verification code to your email, please copy and paste it into the given input box" });

  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// POST /verify
app.post("/verify", async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const tempuser = await TempUserClient.findOne({ email });

    if (!tempuser) {
      return res.status(400).json({ message: "User not found." });
    }

    if (tempuser.verificationCode !== verificationCode) {
      return res.status(400).json({ message: "Invalid verification code." });
    }

    tempuser.isVerified = true;
    await ClientUser.findOneAndUpdate(
      { email },
      {
        $set: {
          name: tempuser.name,
          password: tempuser.password
        }
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );

    res.json({ message: "Email verified successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during verification." });
  }
});


app.post("/clientlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await ClientUser.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Login successful
    res.json({ user: existingUser });
  } catch (error) {
    console.error("Error in client login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
