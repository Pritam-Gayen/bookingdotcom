// src/LoginButton.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginButton = () => {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    axios.post('http://localhost:3000', {
      token: response.credential,
    })
    .then(res => res.data)
    .then(data => {
      console.log('User data:', data);
    })
    .catch(error => {
      console.error('Login error:', error);
    });
  };

  const onFailure = (response) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onFailure}
    />
  );
};

export default LoginButton;
