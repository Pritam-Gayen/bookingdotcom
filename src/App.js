// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './login';
import LogoutButton from './logout';

const clientID = '2518369344-q9dpo7qi8cf6miot94a0f4tiqhnslanc.apps.googleusercontent.com';

function App() {
  const [showBottomNav, setshowBottomNav] = useState(true);

  const handleRegisterClick = () => {
    setshowBottomNav(false);
  };

  const handleHomeClick = () => {
    setshowBottomNav(true);
  };

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Router>
        <div className="App">
          <Navbar showBottomNav={showBottomNav} onRegisterClick={handleRegisterClick} onHomeClick={handleHomeClick}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginButton />} />
          </Routes>
          {/* <LoginButton />
          <LogoutButton /> */}
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
