// src/App.js
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './login';
// import LogoutButton from './logout';

const clientID = '2518369344-q9dpo7qi8cf6miot94a0f4tiqhnslanc.apps.googleusercontent.com';

function App() {
  const [showBottomNav, setshowBottomNav] = useState(true);
  const [loginState, setloginState] = useState(() => {
    // Retrieve login state from localStorage on initial load
    return localStorage.getItem('loginState') === 'true';
  });
  const [userPhoto, setUserPhoto] = useState('');
  const [userName, setUserName] = useState('');

  const handleRegisterClick = () => {
    setshowBottomNav(false);
  };

  const handleHomeClick = () => {
    setshowBottomNav(true);
  };

  useEffect(() => {
    // Save loginState to localStorage whenever it changes
    localStorage.setItem('loginState', loginState);
  }, [loginState]);


  useEffect(() => {
    // Retrieve the photo URL from localStorage
    const storedPhoto = localStorage.getItem('userPhoto');
    if (storedPhoto) {
      setUserPhoto(storedPhoto);
    }
  }, []);

  useEffect(() => {
    // Retrieve the photo URL from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Router>
        <div className="App">
          <Navbar showBottomNav={showBottomNav} onRegisterClick={handleRegisterClick} onHomeClick={handleHomeClick} loginState={loginState} userPhoto={userPhoto} userName={userName}/>
          <Routes>
            <Route path="/" element={<Home loginState={loginState} />} />
            <Route path="/login" element={<LoginButton setloginState={setloginState} setUserPhoto={setUserPhoto} setUserName={setUserName}/>} />
          </Routes>
          {/* <LoginButton />
          <LogoutButton /> */}
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
