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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending verification code...");

    try {
      const response = await axios.post("https://bookingdotcom-gkgr.onrender.com/signup", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred!");
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

    </div>
  );
};

export default LoginButton;