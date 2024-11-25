const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser'); // Required for parsing request body

// Replace with your actual service account key (in JSON format)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

exports.handler = async (event, context) => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const app = express();
  
  // Configure CORS (adjust origins as needed)
  const corsOptions = {
    origin: ['https://clonebookingdotcom.netlify.app/'], // Replace with your client-side app origin
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  };
  app.use(cors(corsOptions));

  app.use(bodyParser.json()); // Parse JSON request body

  async function createUser(email, userData) {
    try {
      const userRef = admin.firestore().collection('users').doc(email);
      await userRef.set(userData);
      console.log('User created:', email);
    }
    catch (error) {
      console.error('Error creating user:', error);
    }
  }

  // Login endpoint (modify based on your specific JWT structure)
  app.post('/login', async (req, res) => {
    const token = req.body.token;

    try {
      // Verify the JWT token
      const decodedToken = jwt.decode(token);

      // Create a new user document
      var userData = {
        name: decodedToken.name,
        email: decodedToken.email,
      };
      createUser(decodedToken.email, userData);
      console.log('New user created:', userData);

      // Send successful response with user data
      res.status(200).json({
        message: 'User authenticated successfully',
        user: userData,
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Authentication failed' });
    }
  });

  // Handle other routes as needed...

  // const response = {
  //   statusCode: 200,
  //   body: res, // Change based on your endpoint logic
  // };

  // Handle specific routes based on the HTTP method and path:
  // if (event.httpMethod === 'GET' && event.path === '/') {
  //   response.body = 'Hello, World!';  // Or any other response for GET /
  // } else if (...) {  // Handle other routes as needed
  //   // ...
  // }

  return res;
};