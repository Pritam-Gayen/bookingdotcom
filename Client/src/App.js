// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './login';
import Footer from './Footer.js';
import ListYourProperty from './ListYourProperty';


// import LogoutButton from './logout';

const clientID = JSON.stringify(process.env.CLIENTID);

function App() {
  const [showBottomNav, setshowBottomNav] = useState(true);
  const [showListYourProperty, setshowListYourProperty] = useState(true);
  const [showRegister, setshowRegister] = useState(true);
  const [showSignIn, setshowSignIn] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    // Check the current URL and update state accordingly
    if (pathname === '/') {
      setshowBottomNav(true);
      setshowListYourProperty(true);
    }
  }, [pathname]);


  const [loginState, setloginState] = useState(() => {
    // Retrieve login state from localStorage on initial load
    return localStorage.getItem('loginState') === 'true';
  });
  const [userPhoto, setUserPhoto] = useState('');
  const [userName, setUserName] = useState('');

  const handleRegisterClick = () => {
    setshowBottomNav(false);
    setshowListYourProperty(false);
    setshowRegister(false);
    setshowSignIn(false);
  };
  const handleListyourpropertyClick = () => {
    setshowBottomNav(false);
    setshowListYourProperty(false);
    setshowRegister(false);
    setshowSignIn(false);
  }
  const handleHomeClick = () => {
    setshowBottomNav(true);
    setshowListYourProperty(true);
    setshowRegister(true);
    setshowSignIn(true);
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
          <Navbar showBottomNav={showBottomNav} showListYourProperty={showListYourProperty} showRegister={showRegister} showSignIn={showSignIn} onRegisterClick={handleRegisterClick} onListyourpropertyClick={handleListyourpropertyClick} onHomeClick={handleHomeClick} loginState={loginState} userPhoto={userPhoto} userName={userName} />
          <Routes>
            <Route path="/" element={<Home loginState={loginState} showRegister={showRegister} showSignIn={showSignIn} />} />
            <Route path="/register" element={<LoginButton setloginState={setloginState} setUserPhoto={setUserPhoto} setUserName={setUserName} />} />
            <Route path="/listyourproperty" element={<ListYourProperty setloginState={setloginState} setUserPhoto={setUserPhoto} setUserName={setUserName} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
