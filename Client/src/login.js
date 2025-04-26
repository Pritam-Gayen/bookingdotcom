// src/LoginButton.js
import React from 'react';

import axios from 'axios';

import { useState } from 'react';


const LoginButton = ({ setuserEmail, setloginState, setUserPhoto, setUserName, setshowBottomNav, setshowListYourProperty }) => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending verification code...");

    try {
      const response = await axios.post("https://bookingdotcom-gkgr.onrender.com/signup", formData);
      setMessage(response.data.message);
      setShowVerification(true);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred!");
    }
  };


  const handleVerify = async () => {
    try {
      const response = await axios.post("https://bookingdotcom-gkgr.onrender.com/verify", {
        email: formData.email,
        verificationCode,
      });
      setMessage(response.data.message);
      setShowVerification(false);
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification failed!");
    }
  };

  
  return (
    <div class="d-flex justify-content-center align-items-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Send Verification Code</button>
        <p>{message}</p>
      </form>
    

    {showVerification && (
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button onClick={handleVerify}>Check Verification Code</button>
        </div>
      )}
    </div>
  );
};

export default LoginButton;