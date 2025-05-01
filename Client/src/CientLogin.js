import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userLoginState from './store.js';


const ClientLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setUser = userLoginState((state) => state.setUser);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('https://bookingdotcom-gkgr.onrender.com/clientlogin', formData);
      const { name, email, photo } = response.data;
      setUser({ name, email, photo }); // Updates Zustand store
      navigate('/'); // Redirect after login
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ClientLogin;
