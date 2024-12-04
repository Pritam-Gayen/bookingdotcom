require('dotenv').config();

const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { getStorage } = require('@firebase/storage');


admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
});


const app = express();
// const storage = getStorage(admin.app());
const router = express.Router();

// Configure CORS (adjust origins as needed)
const corsOptions = {
  origin: ['https://clonebookingdotcom.netlify.app'], // Replace with your client-side app origin
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};
app.use(cors(corsOptions));

async function createUser(email, userData) {
  try {
    const userRef = admin.firestore().collection('traveller').doc(email);
    await userRef.set(userData);
    console.log('User created:', email);
  }
  catch (error) {
    console.error('Error creating user:', error);
  }
}


async function createHotelWoner(email, userData) {
  try {
    const userRef = admin.firestore().collection('hotelwoners').doc(email);
    await userRef.set(userData);
    console.log('Hotel Woner created:', email);
  }
  catch (error) {
    console.error('Error creating Hotel Woner:', error);
  }
}



router.get('/', (req, res) => {
  res.send('Hello, World!'); // Or any other desired response
});

// Login endpoint
router.post('/register', async (req, res) => {
  const token = req.body.token;

  try {
    // Verify the JWT token
    const decodedToken = jwt.decode(token);

    // Create a new user document
    const userData = { // Use const for variable declaration
      name: decodedToken.name,
      email: decodedToken.email,
      photo: decodedToken.picture,
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
    // Handle specific errors here (e.g., 401 for JWT verification failure)
    res.status(500).json({ error: 'Authentication failed' });
  }
});

router.get('/hotels', async (req, res) => {
  try {
    const hotelRef = admin.firestore().collection('hotels');
    const hotelsSnapshot = await hotelRef.get();  // Fetch hotel documents
    const hotels = hotelsSnapshot.docs.map(doc => doc.data()); // Extract data
    console.log("hotels :", hotels);
    res.status(200).json({
      message: 'Hotel details',
      hotels: hotels
    });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching hotels' });
  }
});



// ListYourProperty endpoint
router.post('/listyourproperty', async (req, res) => {
  const token = req.body.token;

  try {
    // Verify the JWT token
    const decodedToken = jwt.decode(token);

    // Create a new user document
    const userData = { // Use const for variable declaration
      name: decodedToken.name,
      email: decodedToken.email,
      photo: decodedToken.picture,
    };
    createHotelWoner(decodedToken.email, userData);
    console.log('New user created:', userData);

    // Send successful response with user data
    res.status(200).json({
      message: 'User authenticated successfully',
      user: userData,
    });
  }
  catch (error) {
    console.error(error);
    // Handle specific errors here (e.g., 401 for JWT verification failure)
    res.status(500).json({ error: 'Authentication failed' });
  }
});





app.use(express.json());
// Mount the router onto the Express app
app.use('/', router);// Mount at the root path

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on https://bookingdotcom-gkgr.onrender.com:${port}`);
});
