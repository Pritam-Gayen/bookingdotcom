require('dotenv').config();

const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
});

const app = express();
const router = express.Router();

// Configure CORS (adjust origins as needed)
const corsOptions = {
  origin: ['http://localhost:3000'], // Replace with your client-side app origin
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};
app.use(cors(corsOptions));

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

router.get('/', (req, res) => {
  res.send('Hello, World!'); // Or any other desired response
});

// Login endpoint
router.post('/login', async (req, res) => {
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



app.use(express.json());
// Mount the router onto the Express app
app.use('/', router);// Mount at the root path

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});